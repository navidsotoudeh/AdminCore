//lib
import { Outlet } from "react-router-dom";

//components
import LoginPage from "../pages/login/LoginPage.tsx";
import Header from "./header/Header.tsx";
import Sidebar from "./Sidebar.tsx";

//hooks
import { useAuth } from "@/hooks/useAuth.ts";

const PrimaryLayout = () => {
  const isAuthenticated = useAuth();

  return (
    <>
      {isAuthenticated ? (
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex w-full flex-1 flex-col" dir="rtl">
            <Sidebar /> <Outlet />
          </main>
        </div>
      ) : (
        <LoginPage />
      )}
    </>
  );
};

export default PrimaryLayout;
