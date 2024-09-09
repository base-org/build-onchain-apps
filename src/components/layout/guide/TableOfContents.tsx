import { usePathname } from 'next/navigation';

type TableOfContentsProps = {
  title: string;
  contents: {
    href: string;
    label: React.ReactNode;
  }[];
};

export default function TableOfContents({
  title,
  contents,
}: TableOfContentsProps) {
  const pathname = usePathname();

  return (
    <aside className="relative hidden w-full flex-shrink-1 flex-grow-0 xl:block">
      <nav className="sticky top-28 flex flex-col gap-2 border-gray-500 border-s py-2 ps-4">
        <h2 className="font-bold text-base">{title}</h2>
        <ul className="flex flex-col gap-2">
          {contents.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                data-active={pathname.includes(href)}
                className="font-normal text-base text-sm text-zinc-400 no-underline underline-offset-2 hover:underline data-[active=true]:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
