// src/components/Sidebar.jsx
import React, { useState, useEffect } from "react";
import { NavLink, useLocation, Link as RouterLink } from "react-router-dom";
import { osData } from "../data/osData";

// Иконка "стрелочка вниз" для раскрывающихся списков
const ChevronDownIcon = () => (
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

// Компонент для ссылок в сайдбаре, чтобы не дублировать стили и логику
const SidebarNavItem = ({
  to,
  children,
  className = "",
  isSubsection = false,
  closeMobileSidebar,
}) => {
  const handleClick = () => {
    if (closeMobileSidebar) {
      // Вызываем закрытие, если функция передана (т.е. это мобильный сайдбар)
      closeMobileSidebar();
    }
  };

  return (
    <NavLink
      to={to}
      end={!isSubsection} // Точное совпадение для основных разделов, если они не имеют подразделов или это ссылка на сам раздел
      onClick={handleClick}
      className={
        ({ isActive }) =>
          `${className} block py-1.5 px-3 rounded-md hover:bg-blue-100 dark:hover:bg-neutral-700/70 transition-colors duration-150 ease-in-out ${
            isActive
              ? "bg-blue-100 dark:bg-neutral-700 font-semibold text-blue-700 dark:text-blue-100"
              : "text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100"
          } ${isSubsection ? "text-sm" : "font-medium"}` // Основные разделы чуть крупнее
      }
    >
      {children}
    </NavLink>
  );
};

// Основной компонент сайдбара
// Принимает closeSidebar - функцию для закрытия (актуально для мобильной версии)
const Sidebar = ({ closeSidebar }) => {
  const location = useLocation();

  // Состояние для отслеживания открытых/закрытых основных разделов (для аккордеона)
  const [openSections, setOpenSections] = useState(() => {
    const currentOpen = {};
    if (osData && osData.length > 0) {
      osData.forEach((section) => {
        // Автоматически открываем раздел, если текущий путь начинается с пути этого раздела
        if (location.pathname.startsWith(section.path)) {
          currentOpen[section.id] = true;
        }
      });
    }
    return currentOpen;
  });

  // Функция для переключения состояния открытости раздела
  const toggleSection = (sectionId) => {
    setOpenSections((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  // Обновляем открытые секции при изменении URL (например, при переходе по прямой ссылке)
  useEffect(() => {
    const currentOpen = {};
    let sectionFoundForAutoOpen = false;
    if (osData && osData.length > 0) {
      osData.forEach((section) => {
        if (location.pathname.startsWith(section.path)) {
          currentOpen[section.id] = true; // Открываем текущую активную секцию
          sectionFoundForAutoOpen = true;
        }
      });
    }

    if (location.pathname === "/") {
      // Если мы на главной, не раскрываем ничего по умолчанию
      // Можно оставить пустым, чтобы не сбрасывать уже открытые вручную секции,
      // или setOpenSections({}); если нужно все закрывать при переходе на главную.
    } else if (sectionFoundForAutoOpen) {
      // Обновляем только те секции, которые должны быть открыты, сохраняя состояние других
      setOpenSections((prev) => {
        const newState = { ...prev }; // Копируем предыдущее состояние
        Object.keys(currentOpen).forEach((key) => {
          // Применяем новые открытые секции
          newState[key] = true;
        });
        // Опционально: закрывать другие секции, если не нужно несколько открытых
        // osData.forEach(section => {
        //   if (!currentOpen[section.id]) newState[section.id] = false;
        // });
        return newState;
      });
    }
  }, [location.pathname]); // Зависимость от изменения пути

  // Вспомогательная функция для удаления нумерации из заголовков для отображения
  const cleanTitle = (title) => title.replace(/^(\d+\.[\d.]*\s*)/, "");

  return (
    // Классы w-full h-full для заполнения родительского контейнера в Layout.jsx
    // md:w-72 остается для десктопной версии, управляемой из Layout
    <aside className="w-full h-full bg-neutral-50 dark:bg-neutral-900 p-4 overflow-y-auto border-r-0 md:border-r border-neutral-200 dark:border-neutral-700 flex-shrink-0">
      <RouterLink to="/" className="block mb-4" onClick={closeSidebar}>
        {" "}
        {/* Закрываем при клике на лого/название */}
        <h1 className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors px-2 py-1">
          ОС Конспект
        </h1>
      </RouterLink>
      <nav>
        <ul className="space-y-1">
          {/* Проверяем, что osData существует и не пуст */}
          {osData && osData.length > 0 ? (
            osData.map((section) => (
              <li key={section.id}>
                {/* Если у секции есть подразделы, делаем ее кнопкой-аккордеоном */}
                {section.subsections && section.subsections.length > 0 ? (
                  <button
                    onClick={() => toggleSection(section.id)}
                    aria-expanded={openSections[section.id]}
                    className={`w-full flex justify-between items-center py-2 px-3 rounded-md text-left hover:bg-blue-100 dark:hover:bg-neutral-700/70 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-neutral-50 dark:focus:ring-offset-neutral-900 focus:ring-blue-500 transition-colors duration-150 ease-in-out
                    ${
                      location.pathname.startsWith(section.path) &&
                      !openSections[section.id] &&
                      !(
                        section.content &&
                        section.content.length > 0 &&
                        location.pathname === section.path
                      ) // Подсвечиваем, если активна вложенная, но секция закрыта и это не "обзор"
                        ? "font-semibold text-blue-600 dark:text-blue-300"
                        : "text-neutral-700 dark:text-neutral-200 font-medium"
                    }
                  `}
                  >
                    <span>{cleanTitle(section.title)}</span>
                    <span
                      className={`text-neutral-400 dark:text-neutral-500 transform transition-transform duration-150 ease-in-out ${
                        openSections[section.id] ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDownIcon />
                    </span>
                  </button>
                ) : (
                  // Если у секции нет подразделов, делаем ее обычной ссылкой
                  <SidebarNavItem
                    to={section.path}
                    closeMobileSidebar={closeSidebar}
                  >
                    {cleanTitle(section.title)}
                  </SidebarNavItem>
                )}

                {/* Раскрывающийся список подразделов */}
                {openSections[section.id] && section.subsections && (
                  <ul className="pt-1 pb-0.5 pl-3 mt-1 ml-3 border-l border-neutral-300 dark:border-neutral-600 space-y-0.5">
                    {/* Ссылка на "обзор" самого раздела, если у него есть контент (добавляется первой в список подразделов) */}
                    {section.content && section.content.length > 0 && (
                      <li className="my-0.5">
                        <SidebarNavItem
                          to={section.path}
                          className="pl-2 italic" // Немного выделим "обзор"
                          isSubsection={true}
                          closeMobileSidebar={closeSidebar}
                        >
                          Обзор раздела
                        </SidebarNavItem>
                      </li>
                    )}
                    {section.subsections.map((subsection) => (
                      <li key={subsection.id} className="my-0.5">
                        <SidebarNavItem
                          to={subsection.path}
                          className="pl-2"
                          isSubsection={true}
                          closeMobileSidebar={closeSidebar}
                        >
                          {cleanTitle(subsection.title)}
                        </SidebarNavItem>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))
          ) : (
            <li className="p-3 text-sm text-neutral-500 dark:text-neutral-400">
              Нет данных для отображения.
            </li>
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
