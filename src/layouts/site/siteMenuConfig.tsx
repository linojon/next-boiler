// special titles: [divider], [login]

import { NavigationItem } from 'src/@types/NavigationItem';

export const siteMenuConfig: NavigationItem[] = [
  {
    title: 'Home',
    path: '/',
    // icon:
  },
  {
    title: 'Posts',
    path: '/posts',
    // icon:
  },
  {
    title: 'About',
    path: '/about',
    // icon:
  },
  {
    title: 'Contact',
    path: 'mailto:info@parkerhill.com',
  },
  {
    title: 'Drafts',
    path: '/posts/drafts',
    role: 'member',
  },
  {
    title: 'New Post',
    path: '/posts/new',
    role: 'member',
  },
];
