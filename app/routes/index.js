import Home from '@pages/Home'
import Page404 from '@pages/404'

export default [
  {
    path: '/',
    exact: true,
    component: Home,
    meta: {
      id: 'homepage',
      title: `@vianhanif - Hi, There!`
    }
  },
  {
    path: '*',
    component: Page404,
    meta: {
      id: 'not-found',
      title: 'Oopps! wrong page'
    }
  }
];
