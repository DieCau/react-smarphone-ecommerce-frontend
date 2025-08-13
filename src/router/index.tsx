import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ClientLayout } from '../layouts/ClientLayout';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { RootLayout } from '../layouts/RootLayout';
import {
  AboutPage,
  CellPhonePage,
  CellPhonesPage,
  CheckoutPage,
  DashboardNewProductPage,
  DashboardOrderPage,
  DashboardOrdersPage,
  DashboardProductSlugPage,
  DashboardProductsPage,
  HomePage,
  LoginPage,
  OrdersUserPage,
  OrderUserPage,
  RegisterPage,
  ThankyouPage,
} from '../pages';

// Router
// Este archivo define la estructura de enrutamiento de la aplicación usando React Router.
// Configura las rutas principales de la aplicación, incluyendo páginas públicas como Inicio, Celulares, Acerca de, 
// Iniciar sesión y Registrarse, así como rutas protegidas para cuentas de usuario y funcionalidades del panel de control.
// La función `createBrowserRouter` se utiliza para crear una instancia de enrutador con rutas anidadas.

export const router = createBrowserRouter([  
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'celulares',
        element: <CellPhonesPage />,
      },
      {
        path: 'celulares/:slug',
        element: <CellPhonePage />,
      },
      {
        path: 'nosotros',
        element: <AboutPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'registro',
        element: <RegisterPage />,
      },
      {
        path: 'account',
        element: <ClientLayout />,
        children: [
          {
            path: '',
            element: <Navigate to="/account/pedidos" />,
          },
          {
            path: 'pedidos',
            element: <OrdersUserPage />,
          },
          {
            path: 'pedidos/:id',
            element: <OrderUserPage />,
          },
        ],
      },
    ],
  },
  {
    path: '/checkout',
    element: <CheckoutPage />,
  },
  {
    path: '/checkout/:id/thank-you',
    element: <ThankyouPage />,
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard/productos" />,
      },
      {
        path: 'productos',
        element: <DashboardProductsPage />,
      },
      {
        path: 'productos/new',
        element: <DashboardNewProductPage />,
      },
      {
        path: 'productos/editar/:slug',
        element: <DashboardProductSlugPage />,
      },
      {
        path: 'ordenes',
        element: <DashboardOrdersPage />,
      },
      {
        path: 'ordenes/:id',
        element: <DashboardOrderPage />,
      },
    ],
  },
],
);
