import { useQuery } from '@tanstack/react-query'
import { Amount, Native, nativeCurrencyIds, Price } from '@sushiswap/currency'
import { UseTradeParams, UseTradeQuerySelect } from './types'
import { usePrices } from '../usePrices'
import { Percent, ZERO } from '@sushiswap/math'
import { calculateSlippageAmount } from '@sushiswap/amm'
import { tradeValidator } from './validator'
import { useCallback } from 'react'

export const useTradeQuery = (
  { chainId, fromToken, toToken, amount, gasPrice = 50, blockNumber, recipient }: UseTradeParams,
  select: UseTradeQuerySelect
) =>
  useQuery({
    queryKey: ['getTrade', { chainId, fromToken, toToken, amount, gasPrice, blockNumber, recipient }],
    queryFn: async () => {
      const res = await (
        await fetch(
          `https://swap.sushi.com/v0?chainId=${chainId}&fromTokenId=${
            fromToken.isNative ? nativeCurrencyIds[chainId] : fromToken.wrapped.address
          }&toTokenId=${
            toToken.isNative ? nativeCurrencyIds[chainId] : toToken.wrapped.address
          }&amount=${amount?.quotient.toString()}&gasPrice=${gasPrice}${recipient ? `&to=${recipient}` : ''}`
        )
      ).json()

      return tradeValidator.parse(res)
    },
    keepPreviousData: true,
    select,
    enabled: Boolean(chainId && fromToken && toToken && amount && gasPrice && blockNumber),
  })

export const useTrade = (variables: UseTradeParams) => {
  const { chainId, toToken, amount, slippagePercentage } = variables
  const { data: prices } = usePrices({ chainId })

  const select: UseTradeQuerySelect = useCallback(
    (data) => {
      if (!data || !amount) {
        return {
          swapPrice: undefined,
          priceImpact: undefined,
          amountOut: undefined,
          minAmountOut: undefined,
          gasSpent: undefined,
          route: [],
        }
      }

      const amountOut = Amount.fromRawAmount(toToken, Math.floor(data.getBestRoute.totalAmountOut))

      return {
        swapPrice: amountOut.greaterThan(ZERO) ? new Price({ baseAmount: amount, quoteAmount: amountOut }) : undefined,
        priceImpact: data.getBestRoute.priceImpact,
        amountOut,
        minAmountOut: Amount.fromRawAmount(
          toToken,
          calculateSlippageAmount(amountOut, new Percent(Math.floor(+slippagePercentage * 100), 10_000))[0]
        ),
        gasSpent: prices
          ? Amount.fromRawAmount(Native.onChain(chainId), data.getBestRoute.gasSpent * 1e9)
              .multiply(prices?.[Native.onChain(chainId).wrapped.address].asFraction)
              .toFixed(2)
          : undefined,
        route: data.getCurrentRouteHumanArray,
      }
    },
    [amount, chainId, prices, slippagePercentage, toToken]
  )

  return useTradeQuery(variables, select)
}
