// src/components/Layout.jsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import ThemeSwitcher from "./ThemeSwitcher";

// Иконка "Бургер"
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

// Иконка "Крестик"
const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
      {/* Сайдбар для десктопов (md и выше) */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Мобильный сайдбар (поверх контента) */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <Sidebar />
          {/* Затемнение фона */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm"
            onClick={toggleSidebar}
            aria-hidden="true"
          ></div>
          {/* Кнопка закрытия внутри мобильного сайдбара или рядом */}
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-white z-[60]" // z-index выше сайдбара
            aria-label="Закрыть меню"
          >
            <XIcon />
          </button>
        </div>
      )}

      <div className="flex-1 flex flex-col h-screen max-w-full">
        {" "}
        {/* max-w-full для родителя main */}
        {/* Шапка */}
        <header className="bg-white dark:bg-neutral-900/80 backdrop-blur-sm sticky top-0 z-40 shadow-sm p-3 border-b border-neutral-200 dark:border-neutral-700 flex justify-between items-center">
          {/* Кнопка "Бургер" для мобильных */}
          <button
            onClick={toggleSidebar}
            className="md:hidden p-2 rounded-md text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            aria-label="Открыть меню"
          >
            <MenuIcon />
          </button>
          <div className="flex-1"></div>{" "}
          {/* Распорка, чтобы ThemeSwitcher был справа */}
          <ThemeSwitcher />
        </header>
        {/* Основной контент */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 sm:p-6 md:py-8 md:px-10 max-w-3xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
