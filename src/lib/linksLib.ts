import { ILink } from '@/types/header.types';

// eslint-disable-next-line import/prefer-default-export
export const getHeaderLinks = (): ILink[] => [
  {
    href: '/about',
    text: 'About',
    id: 'about',
    active: false,
  },
  {
    href: '/contribute',
    text: 'Contribute',
    id: 'contribute',
    active: false,
  },
];

export const getStatefulLinks =
  (active: string) =>
  (links: ILink[]): ILink[] =>
    links.map((link) => ({ ...link, active: link.href === active }));
