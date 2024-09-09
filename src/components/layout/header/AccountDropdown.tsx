import { Avatar } from '@coinbase/onchainkit/identity';
import { Content, Portal, Root, Trigger } from '@radix-ui/react-dropdown-menu';
import { clsx } from 'clsx';
import { useAccount } from 'wagmi';
import { AccountInfoPanel } from './AccountInfoPanel';

const DropdownMenuContentStyle = {
  marginTop: '-22px',
};

export function AccountDropdown() {
  const { address } = useAccount();

  return (
    <Root>
      <Trigger asChild={true}>
        <div className="flex h-8 w-8 items-center justify-center">
          {address && (
            <button type="button" aria-label="Disconnect">
              <Avatar address={address} />
            </button>
          )}
        </div>
      </Trigger>
      <Portal>
        <Content
          align="end"
          sideOffset={40}
          className={clsx(
            'inline-flex h-42 w-60 flex-col items-start justify-start',
            'rounded-lg bg-neutral-900 bg-opacity-90 px-6 pt-6 pb-2 shadow backdrop-blur-2xl',
          )}
          style={DropdownMenuContentStyle}
        >
          <AccountInfoPanel />
        </Content>
      </Portal>
    </Root>
  );
}
