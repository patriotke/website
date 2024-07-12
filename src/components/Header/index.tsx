/**
 *
 * Header
 *
 */
import Link from 'next/link';
import { clsx } from 'clsx';

export type ILink = {
  href: string;
  text: string;
  active: boolean;
  id: string;
};
export type IHeader = {
  links: ILink[];
};

function Header({ links = [] }: IHeader) {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4 border-y border-gray-200 sticky top-0">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <Link className="flex-none text-xl font-semibold" href="/">
          {process.env.NEXT_PUBLIC_TITLE}
        </Link>
        <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={clsx('font-medium', {
                'text-blue-500': link.active,
                'text-gray-600 hover:text-gray-900': !link.active,
              })}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
