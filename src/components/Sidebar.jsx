// src/components/Sidebar.jsx
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { osData } from "../data/osData";

// Иконки для "стрелочек" (можно использовать SVG или символы)
const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-4 h-4 inline-block ml-1 transform transition-transform duration-200"
  >
    <path
      fillRule="evenodd"
      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

const SidebarLink = ({ to, children, className = "", exact = false }) => {
  return (
    <NavLink
      to={to}
      end={exact} // end={true} для точного совпадения пути, если нужно
      className={({ isActive }) =>
        `${className} block py-2 px-3 rounded-md hover:bg-blue-100 dark:hover:bg-neutral-700 transition-colors ${
          isActive
            ? "bg-blue-100 dark:bg-neutral-700 font-semibold text-blue-700 dark:text-blue-100"
            : "text-neutral-700 dark:text-neutral-300"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

const Sidebar = () => {
  const location = useLocation();
  // Состояние для отслеживания открытых/закрытых основных разделов
  const [openSections, setOpenSections] = useState(() => {
    // Изначально открываем раздел, если текущий путь находится внутри него
    const currentOpen = {};
    osData.forEach((section) => {
      if (location.pathname.startsWith(section.path)) {
        currentOpen[section.id] = true;
      }
    });
    return currentOpen;
  });

  const toggleSection = (sectionId) => {
    setOpenSections((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  // Обновляем открытые секции при изменении URL
  useEffect(() => {
    const currentOpen = {};
    let sectionFound = false;
    osData.forEach((section) => {
      if (location.pathname.startsWith(section.path)) {
        currentOpen[section.id] = true;
        sectionFound = true;
      }
    });
    // Если мы на главной странице, не открываем никакие секции по умолчанию (кроме как если бы у / был свой id)
    if (location.pathname === "/") {
      setOpenSections({});
    } else if (sectionFound) {
      setOpenSections(currentOpen);
    }
    // Если нужно, чтобы при уходе из раздела он закрывался, можно добавить else: setOpenSections({});
  }, [location.pathname]);

  return (
    <aside className="w-72 bg-neutral-50 dark:bg-neutral-900 p-5 shadow-lg_ overflow-y-auto border-r border-neutral-200 dark:border-neutral-700 flex-shrink-0 h-screen sticky top-0">
      <NavLink to="/" className="block">
        <h1 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors">
          ОС Конспект
        </h1>
      </NavLink>
      <nav>
        <ul>
          {osData.map((section) => (
            <li key={section.id} className="mb-1">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex justify-between items-center py-2 px-3 rounded-md text-left text-neutral-800 dark:text-neutral-200 hover:bg-blue-100 dark:hover:bg-neutral-700 focus:outline-none transition-colors"
              >
                <span
                  className={`${
                    location.pathname.startsWith(section.path) &&
                    !openSections[section.id]
                      ? "font-semibold text-blue-700 dark:text-blue-200"
                      : location.pathname === section.path
                      ? "font-bold text-blue-700 dark:text-blue-100"
                      : ""
                  }`}
                >
                  {section.title}
                </span>
                {section.subsections && section.subsections.length > 0 && (
                  <span
                    className={`transform transition-transform duration-200 ${
                      openSections[section.id] ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown />
                  </span>
                )}
              </button>

              {openSections[section.id] && section.subsections && (
                <ul className="pl-4 mt-1 border-l border-neutral-300 dark:border-neutral-600 ml-2">
                  {/* Ссылка на "обзор" главного раздела, если у него есть свой контент */}
                  {/* Это нужно, если path основного раздела ведет на страницу с его собственным контентом, а не только как заголовок для подразделов */}
                  {/*
                  <li>
                     <SidebarLink to={section.path} className="text-sm" exact={true}>
                       Обзор раздела
                     </SidebarLink>
                  </li>
                  */}
                  {section.subsections.map((subsection) => (
                    <li key={subsection.id} className="my-0.5">
                      <SidebarLink to={subsection.path} className="text-sm">
                        {subsection.title.replace(/^(\d+\.\d+\.\s*)/, "")}{" "}
                        {/* Убираем нумерацию для краткости */}
                      </SidebarLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

// Не забудь импортировать useEffect из 'react'
import { useEffect } from "react";

export default Sidebar;
