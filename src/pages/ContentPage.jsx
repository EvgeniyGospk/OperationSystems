// src/pages/ContentPage.jsx
import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { osData } from "../data/osData"; // Импортируем ТОЛЬКО osData
import ContentRenderer from "../components/ContentRenderer";

// Вспомогательная функция для рекурсивного поиска элемента по пути
const findItemRecursive = (items, path) => {
  if (!items) return null; // Добавим проверку на случай пустых items
  for (const item of items) {
    if (item.path === path) {
      return item;
    }
    if (item.subsections) {
      const foundInChildren = findItemRecursive(item.subsections, path);
      if (foundInChildren) {
        return foundInChildren;
      }
    }
  }
  return null;
};

// Вспомогательная функция для построения хлебных крошек
const getBreadcrumbs = (dataToSearch, currentPath) => {
  const crumbs = [{ title: "Главная", path: "/" }];
  if (currentPath === "/" || !dataToSearch) {
    // Добавим проверку на dataToSearch
    return crumbs;
  }

  const pathSegments = currentPath.split("/").filter(Boolean);
  let accumulatedPath = "";
  let currentLevelData = dataToSearch;

  for (const segment of pathSegments) {
    accumulatedPath += `/${segment}`;
    if (!currentLevelData) break; // Прерываем, если нет данных для поиска
    const foundItem = currentLevelData.find(
      (item) => item.path === accumulatedPath
    );
    if (foundItem) {
      crumbs.push({ title: foundItem.title, path: foundItem.path });
      currentLevelData = foundItem.subsections || [];
    } else {
      break;
    }
  }
  return crumbs;
};

const ContentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentItem = findItemRecursive(osData, location.pathname);

  useEffect(() => {
    if (location.pathname === "/" && (!currentItem || !currentItem.content)) {
      if (osData && osData.length > 0) {
        const firstSection = osData[0];
        if (
          firstSection.subsections &&
          firstSection.subsections.length > 0 &&
          firstSection.subsections[0].path
        ) {
          navigate(firstSection.subsections[0].path, { replace: true });
        } else if (firstSection.path) {
          navigate(firstSection.path, { replace: true });
        }
      }
    }
  }, [location.pathname, currentItem, navigate]);

  let pageTitle = "Конспект по ОС";
  let contentToRender = null;
  const breadcrumbs = getBreadcrumbs(osData, location.pathname);

  if (currentItem && currentItem.content) {
    pageTitle = currentItem.title;
    contentToRender = currentItem.content;
  } else if (
    currentItem &&
    !currentItem.content &&
    currentItem.subsections &&
    currentItem.subsections.length > 0
  ) {
    pageTitle = currentItem.title;
    // ПРЯМОЕ СОЗДАНИЕ ОБЪЕКТА
    contentToRender = [
      {
        type: "paragraph",
        text: `Это обзорный раздел для "<strong>${currentItem.title.replace(
          /^(\d+\.[\d.]*\s*)/,
          ""
        )}</strong>". Выберите подраздел для изучения.`,
      },
    ];
  } else if (location.pathname === "/") {
    pageTitle = "Добро пожаловать!";
    // ИСПРАВЛЕНИЕ ЗДЕСЬ: ПРЯМОЕ СОЗДАНИЕ ОБЪЕКТА
    contentToRender = [
      {
        type: "paragraph",
        text: "Выберите раздел для изучения в меню слева. Если вы видите эту страницу, возможно, автоматический переход на первый раздел не сработал или в данных нет контента для корневых разделов.",
      },
    ];
  }

  // Убираем нумерацию из заголовка страницы и хлебных крошек
  const cleanTitle = (title) => title.replace(/^(\d+\.[\d.]*\s*)/, "");

  return (
    <div className="bg-white dark:bg-neutral-800/70 shadow-xl rounded-xl p-6 md:py-8 md:px-10 ring-1 ring-inset ring-neutral-200 dark:ring-neutral-700/50 min-h-[calc(100vh-10rem)]">
      {" "}
      {/* Добавил min-height */}
      {breadcrumbs && breadcrumbs.length > 1 && (
        <nav
          aria-label="breadcrumb"
          className="mb-6 text-sm text-neutral-500 dark:text-neutral-400"
        >
          <ol className="list-none p-0 inline-flex flex-wrap gap-x-1">
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.path + index} className="flex items-center">
                {" "}
                {/* Улучшил key */}
                {index > 0 && (
                  <span className="mx-1 text-neutral-400 dark:text-neutral-500">
                    /
                  </span>
                )}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-neutral-700 dark:text-neutral-300 font-semibold">
                    {cleanTitle(crumb.title)}
                  </span>
                ) : (
                  <Link
                    to={crumb.path}
                    className="hover:underline text-neutral-600 dark:text-neutral-400 hover:text-[--color-accent] dark:hover:text-[--color-accent-dark]"
                  >
                    {cleanTitle(crumb.title)}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}
      <h1 className="!text-3xl md:!text-4xl font-extrabold mb-8 !border-b-2 !border-[--color-accent] dark:!border-[--color-accent-dark] pb-4 !text-neutral-900 dark:!text-neutral-100">
        {cleanTitle(pageTitle)}
      </h1>
      {contentToRender && contentToRender.length > 0 ? (
        <ContentRenderer content={contentToRender} />
      ) : (
        <div className="text-center py-10">
          <h2 className="text-2xl font-semibold mb-4 text-neutral-700 dark:text-neutral-300">
            Раздел не найден или пуст
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            Содержимое для <code>{location.pathname}</code> не найдено или еще
            не добавлено.
          </p>
          <Link
            to="/"
            className="mt-8 inline-block px-6 py-3 bg-[--color-accent] text-white rounded-lg hover:bg-[--color-accent-hover] dark:bg-[--color-accent-dark] dark:hover:bg-sky-500 transition-colors font-semibold shadow-md"
          >
            На главную
          </Link>
        </div>
      )}
    </div>
  );
};

export default ContentPage;
