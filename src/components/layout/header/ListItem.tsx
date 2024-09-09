import { Link } from '@radix-ui/react-navigation-menu';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export const ListItem = forwardRef(function ListItem(
  {
    children,
    target,
    href,
  }: {
    href: string;
    children: React.ReactNode;
    target?: string;
  },
  ref: React.Ref<HTMLAnchorElement>,
) {
  return (
    <div className="inline-flex items-center justify-start gap-8">
      <Link asChild={true} className="flex items-center justify-start gap-1">
        <a
          href={href}
          className={clsx(
            'font-normal font-robotoMono text-base text-white no-underline',
          )}
          ref={ref}
          target={target}
        >
          {children}
        </a>
      </Link>
    </div>
  );
});
