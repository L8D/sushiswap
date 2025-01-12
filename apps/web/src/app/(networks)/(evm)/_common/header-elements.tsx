import {
  type NavigationElement,
  NavigationElementType,
} from '@sushiswap/ui'
import { ChainId, ChainKey } from 'sushi/chain'

interface HeaderElements {
  chainId?: ChainId
  includeOnramper?: boolean
}

export const headerElements = ({
  chainId,
}: HeaderElements): NavigationElement[] => [
  {
    title: 'Swap',
    href: `/${ChainKey[chainId ?? ChainId.ETHEREUM]}/swap`,
    show: 'desktop',
    type: NavigationElementType.Single,
  },
]
