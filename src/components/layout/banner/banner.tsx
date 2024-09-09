import clsx from 'clsx';
import Image from 'next/image';
import NextLink from 'next/link';

type BannerProps = {
  pageName: string;
  pageUrl: string;
  wip?: boolean;
};

export default function Banner({ pageName, pageUrl, wip }: BannerProps) {
  return (
    <section
      className={clsx(
        'flex flex-col items-center justify-between gap-6 p-6 md:flex-row md:gap-0',
        `rounded-lg border border-zinc-400 border-opacity-10 bg-neutral-900 ${
          wip ? 'text-boat-color-yellow-70' : 'text-white'
        }`,
      )}
    >
      <div className="flex items-start justify-start gap-2 md:gap-6">
        <div className="flex h-6 w-6 shrink-0 items-center justify-center md:h-12 md:w-12">
          <Image
            src="/hammerandpick.svg"
            width={10}
            height={10}
            alt="hammerandpick"
            className="h-6 w-6 md:h-12 md:w-12"
          />
        </div>
        <div className="inline-flex flex-col items-start justify-start gap-2">
          <h1 className="font-inter font-semibold text-base leading-normal ">
            Step into the {pageName} experience.
          </h1>
          {wip ? (
            <div className="font-inter font-normal text-base leading-normal ">
              Just a quick heads up: this experience is a work in progress, keep
              an eye out for updates as we work on making it even better!
            </div>
          ) : (
            <div className="font-inter font-normal text-base leading-normal">
              Take a dive into our fully functional demo page. Explore how the
              Smart Contract works, connect with it using Wagmi, and master a
              seamless user experience with React and Tailwind.
            </div>
          )}
        </div>
      </div>
      <div className="flex w-full min-w-36 items-center justify-end md:w-fit">
        <NextLink
          href={`/${pageUrl}#guide`}
          className={clsx(
            'w-full rounded-3xl bg-white px-4 py-2 font-inter',
            'text-center font-medium text-black text-sm leading-normal no-underline',
          )}
        >
          Read the Guide
        </NextLink>
      </div>
    </section>
  );
}
