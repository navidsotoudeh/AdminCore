//library
import { Navigate, useRoutes } from "react-router-dom";
import { lazy } from "react";

const LazyComponent = {
  //layout
  PrimaryLayout: lazy(() => import("./layouts/PrimaryLayout.tsx")),

  //container
  NotFoundPage: lazy(() => import("./pages/NotFoundPage.tsx")),
  HomePage: lazy(() => import("./pages/home/HomePage.tsx")),
  LoginPage: lazy(() => import("./pages/login/LoginPage.tsx")),

  //user
  UsersManagementPage: lazy(
    () =>
      import(
        "./pages/systemManagement/usersManagement/UsersManagementPage.tsx"
      ),
  ),
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
      element: null,
      children: [
        {
          path: "/",
          element: <LazyComponent.LoginPage />,
          id: "login",
        },
      ],
    },
    {
      path: "/404",
      element: <LazyComponent.NotFoundPage />,
    },

    // catch all
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
