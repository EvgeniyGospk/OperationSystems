// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import ThemeSwitcher from "./ThemeSwitcher";

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen">
        {/* Шапка */}
        <header className="bg-white dark:bg-neutral-900/80 backdrop-blur-sm sticky top-0 z-40 shadow-sm p-3 border-b border-neutral-200 dark:border-neutral-700 flex justify-end items-center">
          <ThemeSwitcher />
        </header>
        {/* Основной контент */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-6 md:py-8 md:px-10 max-w-3xl mx-auto">
            {" "}
            {/* max-w-3xl для лучшей читаемости */}
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
