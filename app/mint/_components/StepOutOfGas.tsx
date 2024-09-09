import Button from '@/components/Button/Button';
import clsx from 'clsx';
import { useCallback } from 'react';
import { MintSteps } from './ContractDemo';

type OutOfGasStepProps = {
  setMintStep: React.Dispatch<React.SetStateAction<MintSteps>>;
};

export default function StepOutOfGas({ setMintStep }: OutOfGasStepProps) {
  const handleGotIt = useCallback(() => {
    setMintStep(MintSteps.START_MINT_STEP);
  }, [setMintStep]);

  return (
    <div
      className={clsx(
        'rounded-lg border border-boat-color-palette-line',
        'mb-8 bg-boat-footer-dark-gray p-8',
      )}
    >
      <h2 className="mb-5 w-full text-center font-semibold text-2xl text-white">
        You&apos;re out of gas
      </h2>

      <div className="text-center text-6xl">⛽</div>

      <div className="my-4 text-center text-gray-400 text-sm">
        Please fund your wallet and try minting the NFT again.
      </div>

      <Button buttonContent="Got it" onClick={handleGotIt} />
    </div>
  );
}
