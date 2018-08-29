import Home from '@pages/v2/Home'
import Page404 from '@pages/404'
import Login from '@pages/Login'
import LoadToken from '@pages/Login/load_token'
import Admin from '@pages/Admin'

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
    path: '/login',
    exact: true,
    component: Login,
    meta: {
      id: 'loginpage'
    }
  },
  {
    path: '/load_token',
    exact: true,
    component: LoadToken,
    meta: {
      id: 'loadtokenpage'
    }
  },
  {
    path: '/admin',
    exact: true,
    component: Admin,
    meta: {
      id: 'adminpage'
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
