import Home from '@pages/Home'
import Page404 from '@pages/404'
import Login from '@pages/Login'

export default [
  {
    path: '/',
    exact: true,
    component: Home,
    meta: {
      id: 'homepage'
    }
  },
  {
    path: '/login',
    exact: true,
    component: Login,
    meta: {
      id: 'loginpage'
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
