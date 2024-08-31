import { http, createPublicClient } from 'viem';
import type { Chain } from 'viem/chains';

export function getRpcProviderForChain(chain: Chain) {
  return createPublicClient({
    chain: chain,
    transport: http(chain.rpcUrls.default.http[0]),
  });
}
