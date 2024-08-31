/**
 * @jest-environment jsdom
 */

import { HashType, useBlockExplorerLink } from '@/hooks/useBlockExplorerLink';
import { renderHook } from '@testing-library/react';
import type { Chain } from 'viem/chains';

describe('useBlockExplorerLink', () => {
  it('should return the correct explorer link when chain and address are provided', () => {
    const mockChain = {
      blockExplorers: {
        default: { url: 'https://etherscan.io' },
      },
    };
    const mockHash = '0xMockHash';
    const { result } = renderHook(() =>
      useBlockExplorerLink(mockChain as Chain, mockHash, HashType.Address),
    );
    expect(result.current).toBe('https://etherscan.io/address/0xMockHash');
  });

  it('should return the correct explorer link when chain and txn are provided', () => {
    const mockChain = {
      blockExplorers: {
        default: { url: 'https://etherscan.io' },
      },
    };
    const mockHash = '0xMockHash';
    const { result } = renderHook(() =>
      useBlockExplorerLink(mockChain as Chain, mockHash, HashType.Transaction),
    );
    expect(result.current).toBe('https://etherscan.io/tx/0xMockHash');
  });
});
