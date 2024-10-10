//library
import { Navigate, useRoutes } from "react-router-dom";
import { lazy } from "react";

const LazyComponent = {
  //layout
  PrimaryLayout: lazy(() => import("./layout/PrimaryLayout.tsx")),

  //container
  NotFoundPage: lazy(() => import("./pages/NotFoundPage.tsx")),
  HomePage: lazy(() => import("./pages/home/HomePage.tsx")),

  //products
  // ProductsManagementPage: lazy(
  //   () =>
  //     import(
  //       "./pages/systemManagement/productsManagement/ProductsManagementPage.tsx"
  //     ),
  // ),
};

export default function Router() {
  return useRoutes([
    // we want to protect these routes
    {
      element: <LazyComponent.PrimaryLayout />,
      children: [
        {
          path: "/home",
          element: <LazyComponent.HomePage />,
          id: "home",
        },
      ],
    },
    // public routes
    {
      path: "/404",
      element: <LazyComponent.NotFoundPage />,
    },

    // catch all
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
