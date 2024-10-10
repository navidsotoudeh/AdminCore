//lib
import { Outlet } from "react-router-dom";

//components
import Header from "./header/Header.tsx";
import Sidebar from "./Sidebar.tsx";

const PrimaryLayout = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex w-full flex-1 flex-col" dir="rtl">
          <Sidebar /> <Outlet />
        </main>
      </div>
    </>
  );
};

export default PrimaryLayout;
