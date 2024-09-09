'use client';

import { NavbarLink } from '@/components/layout/header/Navbar';
import { ArrowTopRightIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import NextLink from 'next/link';
import FooterIcon from './FooterIcon';

export default function Footer() {
  return (
    <footer className="flex flex-1 flex-col justify-end">
      <div className="flex flex-col justify-between gap-16 bg-boat-footer-dark-gray py-12">
        <div className="container mx-auto flex w-full flex-col justify-between gap-16 px-8 md:flex-row">
          <div className="flex flex-col justify-between">
            <div className="flex h-8 items-center justify-start gap-4">
              <NextLink
                href="/"
                passHref={true}
                className="relative h-8 w-8"
                aria-label="Home page"
              >
                <FooterIcon />
              </NextLink>
              <NextLink
                href="/"
                passHref={true}
                className="text-center font-medium font-robotoMono text-white text-xl no-underline"
              >
                BUILD ONCHAIN APPS
              </NextLink>
              <NavbarLink
                href="https://github.com/coinbase/build-onchain-apps"
                target="_blank"
              >
                <GitHubLogoIcon
                  width="24"
                  height="24"
                  aria-label="build-onchain-apps Github respository"
                />
              </NavbarLink>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center">
              <p className="font-normal text-base text-boat-footer-light-gray leading-7">
                This project is licensed under the MIT License - see the{' '}
                <NextLink
                  href="https://github.com/coinbase/build-onchain-apps/blob/main/LICENSE.md"
                  className="underline"
                  target="_blank"
                >
                  LICENSE.md
                </NextLink>{' '}
                file for details
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center gap-4 text-center font-medium font-robotoMono text-white text-xl">
            EXPERIENCES
            <NavbarLink href="/buy-me-coffee">
              <span className="flex items-center gap-1 px-2">
                Buy Me Coffee <ArrowTopRightIcon width="16" height="16" />
              </span>
            </NavbarLink>
            <NavbarLink href="/mint">
              <span className="flex items-center gap-1 px-2">
                Mint NFT <ArrowTopRightIcon width="16" height="16" />
              </span>
            </NavbarLink>
            <NavbarLink href="/paymaster-bundler">
              <span className="flex items-center gap-1 px-2">
                Paymaster Bundler <ArrowTopRightIcon width="16" height="16" />
              </span>
            </NavbarLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
