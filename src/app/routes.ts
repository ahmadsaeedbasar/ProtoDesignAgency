import { createBrowserRouter, redirect } from 'react-router';
import Layout from './pages/Layout';
import Landing from './pages/Landing';
import Services from './pages/Services';
import Products from './pages/Products';
import Internship from './pages/Internship';
import Research from './pages/Research';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { ROUTES, ROUTE_SEGMENTS } from './routePaths';

export const router = createBrowserRouter(
  [
    {
      path: ROUTES.home,
      Component: Layout,
      children: [
        {
          index: true,
          Component: Landing,
        },
        {
          path: ROUTE_SEGMENTS.services,
          Component: Services,
        },
        {
          path: ROUTE_SEGMENTS.products,
          Component: Products,
        },
        {
          path: ROUTE_SEGMENTS.internship,
          Component: Internship,
        },
        {
          path: ROUTE_SEGMENTS.internee,
          loader: () => redirect(ROUTES.internship),
        },
        {
          path: ROUTE_SEGMENTS.research,
          Component: Research,
        },
        {
          path: ROUTE_SEGMENTS.contact,
          Component: Contact,
        },
        {
          path: '*',
          Component: NotFound,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);
