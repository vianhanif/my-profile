import Home from '@pages/Home'
import About from '@pages/About'
import Page404 from '@pages/404'
export default [
  {
    path: '/',
    exact: true,
    component: Home,
    meta: {
      id: 'homepage',
      title: 'Home Page'
    }
  },
  {
    path: '/about',
    exact: true,
    component: About,
    meta: {
      id: 'aboutpage',
      title: 'About Page'
    }
  },
  {
    path: '*',
    component: Page404,
    meta: {
      id: 'not-found',
      title: 'Home Page'
    }
  }
];
