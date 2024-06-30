import { database, onUpdate } from '../database.js'

export async function clearNotifications({
  account,
}: { account: string | `0x${string}` | undefined }) {
  if (!database) {
    throw new Error('Database not initialized')
  }

  let notifications

  if (account) {
    notifications = await database.getAllKeysFromIndex(
      'notifications',
      'by-account',
      account,
    )
  } else {
    notifications = await database.getAllKeys('notifications')
  }

  const promises = []

  for (const key of notifications) {
    promises.push(database.delete('notifications', key))
  }

  await Promise.allSettled(promises)
  onUpdate()
}
