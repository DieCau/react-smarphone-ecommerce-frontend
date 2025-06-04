import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <h1>Inicio</h1>,
      },
      {
        path: "celulares",
        element: <h1>Celulares</h1>,
      },
      {
        path: "nosotros",
        element: <h1>Sobre Nosotros</h1>,
      },
    ],
  },
]);
