// src/components/Sidebar.jsx
import React, { useState, useEffect } from "react";
import { NavLink, useLocation, Link as RouterLink } from "react-router-dom"; // Используем RouterLink для лого
import { osData } from "../data/osData";

// ... (иконка ChevronDown остается)
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

const SidebarLink = ({
  to,
  children,
  className = "",
  isSubsection = false,
  onClick,
}) => {
  // Добавили onClick
  return (
    <NavLink
      to={to}
      end={!isSubsection}
      onClick={onClick} // Передаем onClick
      className={({ isActive }) =>
        `${className} block py-1.5 px-3 rounded-md hover:bg-blue-100 dark:hover:bg-neutral-700/70 transition-colors ${
          isActive
            ? "bg-blue-100 dark:bg-neutral-700 font-semibold text-blue-700 dark:text-blue-100"
            : "text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100"
        } ${isSubsection ? "text-sm" : ""}`
      }
    >
      {children}
    </NavLink>
  );
};

// Принимаем проп closeSidebar для мобильной версии
const Sidebar = ({ closeSidebar }) => {
  const location = useLocation();
  const [openSections, setOpenSections] = useState(() => {
    // ... (логика для openSections остается)
    const currentOpen = {};
    if (osData && osData.length > 0) {
      osData.forEach((section) => {
        if (location.pathname.startsWith(section.path)) {
          currentOpen[section.id] = true;
        }
      });
    }
    return currentOpen;
  });

  const toggleSection = (sectionId) => {
    setOpenSections((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  useEffect(() => {
    // ... (логика useEffect для openSections остается)
    const currentOpen = {};
    let sectionFoundForAutoOpen = false;
    if (osData && osData.length > 0) {
      osData.forEach((section) => {
        if (
          location.pathname.startsWith(
            section.path +
              (section.subsections && section.subsections.length > 0 ? "/" : "")
          ) ||
          location.pathname === section.path
        ) {
          currentOpen[section.id] = true;
          sectionFoundForAutoOpen = true;
        }
      });
    }
    if (location.pathname === "/") {
      // setOpenSections({}); // Не сбрасываем, чтобы при редиректе не "моргало"
    } else if (sectionFoundForAutoOpen) {
      setOpenSections((prev) => ({ ...prev, ...currentOpen }));
    }
  }, [location.pathname]);

  const handleLinkClick = () => {
    if (closeSidebar) {
      // Если функция передана (т.е. это мобильный сайдбар)
      closeSidebar();
    }
  };

  const cleanTitle = (title) => title.replace(/^(\d+\.[\d.]*\s*)/, "");

  return (
    // Убрал h-screen и sticky top-0 отсюда, так как это теперь управляется в Layout.jsx
    // Добавил z-index для мобильного сайдбара
    <aside className="w-64 md:w-72 bg-neutral-50 dark:bg-neutral-900 p-4 shadow-lg_ overflow-y-auto border-r border-neutral-200 dark:border-neutral-700 flex-shrink-0 md:h-screen md:sticky md:top-0 z-50">
      <RouterLink to="/" className="block mb-4" onClick={handleLinkClick}>
        {" "}
        {/* Используем RouterLink и onClick */}
        <h1 className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors px-2">
          ОС Конспект
        </h1>
      </RouterLink>
      <nav>
        <ul className="space-y-1">
          {osData &&
            osData.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => toggleSection(section.id)}
                  aria-expanded={openSections[section.id]}
                  className={`w-full flex justify-between items-center py-2 px-3 rounded-md text-left hover:bg-blue-100 dark:hover:bg-neutral-700/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors
                  ${
                    location.pathname === section.path &&
                    !(section.subsections && section.subsections.length > 0)
                      ? "bg-blue-100 dark:bg-neutral-700 font-semibold text-blue-700 dark:text-blue-100"
                      : "text-neutral-700 dark:text-neutral-200"
                  }
                `}
                >
                  <span
                    className={`
                  ${
                    location.pathname.startsWith(section.path) &&
                    section.subsections &&
                    section.subsections.length > 0
                      ? "font-semibold text-blue-600 dark:text-blue-300"
                      : ""
                  }
                `}
                  >
                    {cleanTitle(section.title)}
                  </span>
                  {section.subsections && section.subsections.length > 0 && (
                    <span
                      className={`transform transition-transform duration-150 ease-in-out ${
                        openSections[section.id] ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown />
                    </span>
                  )}
                </button>

                {openSections[section.id] && section.subsections && (
                  <ul className="pl-3 mt-1 ml-3 border-l border-neutral-300 dark:border-neutral-600 space-y-0.5">
                    {section.content && section.content.length > 0 && (
                      <li className="my-0.5">
                        <SidebarLink
                          to={section.path}
                          className="pl-2"
                          isSubsection={true}
                          onClick={handleLinkClick}
                        >
                          <em>Обзор раздела</em>
                        </SidebarLink>
                      </li>
                    )}
                    {section.subsections.map((subsection) => (
                      <li key={subsection.id} className="my-0.5">
                        <SidebarLink
                          to={subsection.path}
                          className="pl-2"
                          isSubsection={true}
                          onClick={handleLinkClick}
                        >
                          {" "}
                          {/* Передаем handleLinkClick */}
                          {cleanTitle(subsection.title)}
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

export default Sidebar;
