import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

// Importar los módulos y componentes necesarios para renderizar la aplicación
// Crear un elemento root para el contenedor de la aplicación y renderizar 
// la aplicación usando el modo estricto de React para mejores prácticas de desarrollo
// La aplicación usa React Router para el enrutamiento y TanStack Query para la obtención de datos

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>
  </StrictMode>
);
