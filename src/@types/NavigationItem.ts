export type NavigationItem = {
  title: string;
  path?: string;
  icon?: JSX.Element;
  role?: string;
  isOpen?: boolean;
  isHome?: boolean;
  children?: {
    subheader: string;
    items: NavigationItem[];
  };
};
