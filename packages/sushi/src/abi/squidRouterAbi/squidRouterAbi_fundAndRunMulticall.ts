export const squidRouterAbi_fundAndRunMulticall = [
  {
    inputs: [
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      {
        components: [
          {
            internalType: 'enum ISquidMulticall.CallType',
            name: 'callType',
            type: 'uint8',
          },
          { internalType: 'address', name: 'target', type: 'address' },
          { internalType: 'uint256', name: 'value', type: 'uint256' },
          { internalType: 'bytes', name: 'callData', type: 'bytes' },
          { internalType: 'bytes', name: 'payload', type: 'bytes' },
        ],
        internalType: 'struct ISquidMulticall.Call[]',
        name: 'calls',
        type: 'tuple[]',
      },
    ],
    name: 'fundAndRunMulticall',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
] as const