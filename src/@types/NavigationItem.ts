export type NavigationItem = {
  title: string;
  path?: string;
  icon?: JSX.Element;
  role?: string;
  isOpen?: boolean;
  isHome?: boolean;
  subItems?: {
    subheader: string;
    items: NavigationItem[];
  };
};
