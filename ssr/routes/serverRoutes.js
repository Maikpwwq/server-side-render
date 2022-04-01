import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../../src/containers/Home';
import Login from '../../src/containers/Login';
import Register from '../../src/containers/Register';
import NotFound from '../../src/containers/NotFound';
import Player from '../../src/containers/Player';

const serverRoutes = () => {

  return useRoutes([
    {
      element: <Home />,
      path: '/',
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/player/:id',
      element: <Player />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);
};

export default serverRoutes;
