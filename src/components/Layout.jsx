// src/components/Layout.jsx
import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom"; // Добавил useLocation
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
  const location = useLocation(); // Получаем текущий путь

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Закрываем сайдбар при смене маршрута на мобильных устройствах
  useEffect(() => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  }, [location.pathname]); // Зависимость от изменения пути

  return (
    <div className="flex min-h-screen bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
      {/* --- Сайдбар --- */}
      {/* Оверлей для мобильных, когда сайдбар открыт */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm md:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}

      {/* Сам сайдбар: скрыт на мобильных по умолчанию, показывается на десктопах */}
      {/* Добавляем классы для трансформации и позиционирования на мобильных */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-neutral-50 dark:bg-neutral-900 shadow-lg transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:shadow-none md:w-72 md:flex-shrink-0
                    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Передаем функцию для закрытия сайдбара в сам компонент Sidebar */}
        <Sidebar closeSidebar={toggleSidebar} isMobile={isSidebarOpen} />
        {/* Кнопка закрытия внутри мобильного сайдбара (если Sidebar сам ее не рендерит) */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 p-1 text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-white md:hidden"
          aria-label="Закрыть меню"
        >
          <XIcon />
        </button>
      </div>

      {/* --- Основной контент и шапка --- */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {" "}
        {/* overflow-hidden для родителя */}
        {/* Шапка */}
        <header className="bg-white dark:bg-neutral-900/80 backdrop-blur-sm sticky top-0 z-20 shadow-sm p-3 border-b border-neutral-200 dark:border-neutral-700 flex justify-between items-center">
          {/* Кнопка "Бургер" для мобильных */}
          <button
            onClick={toggleSidebar}
            className="md:hidden p-2 rounded-md text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            aria-label="Открыть меню"
            aria-expanded={isSidebarOpen}
          >
            {isSidebarOpen ? <XIcon /> : <MenuIcon />}{" "}
            {/* Меняем иконку в зависимости от состояния */}
          </button>
          <div className="flex-1 md:hidden"></div>{" "}
          {/* Заполнитель, чтобы ThemeSwitcher был справа на мобильных, когда бургер слева */}
          <div className="hidden md:block flex-1"></div>{" "}
          {/* Заполнитель для десктопа */}
          <ThemeSwitcher />
        </header>
        {/* Основной контент */}
        <main className="flex-1 overflow-y-auto">
          {" "}
          {/* Прокручиваемая только основная часть */}
          <div className="p-4 sm:p-6 md:py-8 md:px-10 max-w-3xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
