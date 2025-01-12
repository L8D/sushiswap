// import { usePinnedTokens } from '@sushiswap/hooks'
import { useMemo } from 'react'
import { ChainId } from 'sushi/chain'
import { Token } from 'sushi/currency'
import { DEFAULT_BASES } from 'sushi/config'

interface UseChipTokens {
  chainId: ChainId
  includeNative?: boolean
  showPinnedTokens?: boolean
}

// TODO: Add pinned tokens

export function useChipTokens({
  chainId,
  includeNative = true,
  // showPinnedTokens = true,
}: UseChipTokens) {
  const defaultBases = [
    ...DEFAULT_BASES[chainId],
    new Token({
      chainId: ChainId.ETHEREUM,
      address: '0x6e1a19f235be7ed8e3369ef73b196c07257494de',
      decimals: 18,
      symbol: 'WFIL',
      name: 'Wrapped Filecoin',
    })
  ]

  // const {} = usePinnedTokens()

  return useMemo(() => {
    return defaultBases.flatMap((base) => {
      if (base.isNative && !includeNative) return []

      return {
        default: true,
        token: base,
      }
    })
  }, [includeNative, defaultBases])
}
