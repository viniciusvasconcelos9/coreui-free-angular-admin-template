import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Colors',
    url: '/theme/colors',
    iconComponent: { name: 'cil-color-palette' }
  },
  {
    name: 'Weather',
    url: '/api',
    iconComponent: { name: 'cil-drop' }
  },
  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    title: true,
    name: 'Links',
    class: 'mt-auto'
  },
  {
    name: 'Docs',
    url: 'https://coreui.io/angular/docs/5.x/',
    iconComponent: { name: 'cil-description' },
    attributes: { target: '_blank' }
  }
];
