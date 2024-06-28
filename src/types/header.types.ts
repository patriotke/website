export type ILink = {
  href: string;
  text: string;
  active: boolean;
  id: string;
};
export type IHeader = {
  links: ILink[];
};
