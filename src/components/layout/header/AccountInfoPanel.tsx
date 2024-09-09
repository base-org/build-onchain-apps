import { Address, Avatar, Name } from '@coinbase/onchainkit/identity';
import { ExitIcon } from '@radix-ui/react-icons';
import { useCallback } from 'react';
import { useAccount, useDisconnect } from 'wagmi';

export function AccountInfoPanel() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const handleDisconnectWallet = useCallback(() => {
    disconnect();
  }, [disconnect]);

  if (!address) {
    return null;
  }

  return (
    <>
      <div className="mb-4 inline-flex items-center justify-start gap-2">
        <Avatar address={address} className="h-10 w-10 rounded-full" />
        <div className="inline-flex flex-col items-start justify-center gap-1">
          <div className="w-32 font-inter font-medium text-base text-white">
            <Name address={address} />
          </div>
          <span className="w-32 font-inter font-medium text-sm text-zinc-400">
            <Address address={address} />
          </span>
        </div>
      </div>
      <hr className="h-px self-stretch border-transparent bg-zinc-400 bg-opacity-20" />
      <button
        type="button"
        aria-label="Disconnect"
        className="my-4 inline-flex items-center justify-between self-stretch"
        onClick={handleDisconnectWallet}
      >
        <span className="w-32 text-left font-inter font-medium text-base text-white">
          Log out
        </span>
        <ExitIcon className="relative h-4 w-4" />
      </button>
    </>
  );
}
