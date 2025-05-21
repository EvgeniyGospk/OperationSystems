// src/pages/ContentPage.jsx
import React, { useEffect } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { osData } from "../data/osData";
import ContentRenderer from "../components/ContentRenderer";

const findItemRecursive = (items, path) => {
  for (const item of items) {
    if (item.path === path) return item;
    if (item.subsections) {
      const found = findItemRecursive(item.subsections, path);
      if (found) return found;
    }
  }
  return null;
};

const getBreadcrumbs = (items, currentPath) => {
  const crumbs = [{ title: "Главная", path: "/" }];
  if (currentPath === "/") return crumbs;

  const pathParts = currentPath.split("/").filter(Boolean);
  let builtPath = "";

  function findCrumbs(currentItems, currentIndex) {
    if (currentIndex >= pathParts.length) return;

    builtPath += "/" + pathParts[currentIndex];
    const item = currentItems.find(
      (i) => i.path === builtPath || i.id === pathParts[currentIndex]
    ); // Проверка по id для первого уровня

    if (item) {
      crumbs.push({ title: item.title, path: item.path });
      if (item.subsections) {
        findCrumbs(item.subsections, currentIndex + 1);
      }
    } else {
      // Если не нашли по полному пути, ищем по последней части ID (для подразделов)
      constfallbackItem = currentItems.find((i) =>
        i.id.endsWith(pathParts[currentIndex])
      );
      if (fallbackItem) {
        crumbs.push({ title: fallbackItem.title, path: fallbackItem.path });
        if (fallbackItem.subsections) {
          findCrumbs(fallbackItem.subsections, currentIndex + 1);
        }
      }
    }
  }
  findCrumbs(items, 0);
  return crumbs;
};

const ContentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentItem = findItemRecursive(osData, location.pathname);

  useEffect(() => {
    // Если это главный путь "/", но в osData для него нет контента,
    // и есть первый раздел, редиректим на первый раздел.
    if (
      location.pathname === "/" &&
      (!currentItem || !currentItem.content) &&
      osData.length > 0 &&
      osData[0].path
    ) {
      if (
        osData[0].subsections &&
        osData[0].subsections.length > 0 &&
        osData[0].subsections[0].path
      ) {
        navigate(osData[0].subsections[0].path, { replace: true });
      } else {
        navigate(osData[0].path, { replace: true });
      }
    }
  }, [location.pathname, currentItem, navigate]);

  let pageTitle = "Конспект по ОС";
  let contentToRender = null;
  let breadcrumbs = getBreadcrumbs(osData, location.pathname);

  if (currentItem) {
    pageTitle = currentItem.title;
    contentToRender = currentItem.content;
  } else if (location.pathname === "/") {
    // Этот блок теперь может быть не нужен из-за редиректа, но оставим на всякий случай
    pageTitle = "Добро пожаловать!";
    contentToRender = [
      createContentItem("paragraph", {
        text: "Выберите раздел для изучения в меню слева. Если вы видите эту страницу, возможно, автоматический переход на первый раздел не сработал.",
      }),
    ];
  }

  // Для отладки хлебных крошек
  // console.log("Current Path:", location.pathname);
  // console.log("Breadcrumbs:", breadcrumbs);

  return (
    <div className="bg-white dark:bg-neutral-800/50 shadow-xl rounded-xl p-6 md:p-10 ring-1 ring-neutral-200 dark:ring-neutral-700">
      <nav
        aria-label="breadcrumb"
        className="mb-6 text-sm text-neutral-500 dark:text-neutral-400"
      >
        <ol className="list-none p-0 inline-flex flex-wrap">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-neutral-400 dark:text-neutral-500">
                  /
                </span>
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-neutral-700 dark:text-neutral-300 font-semibold">
                  {crumb.title.replace(/^(\d+\.\s*)/, "")}
                </span>
              ) : (
                <Link
                  to={crumb.path}
                  className="hover:underline text-neutral-600 dark:text-neutral-400 hover:text-[--color-accent] dark:hover:text-[--color-accent-dark]"
                >
                  {crumb.title.replace(/^(\d+\.\s*)/, "")}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <h1 className="!text-3xl md:!text-4xl font-extrabold mb-8 !border-b-2 !border-blue-500 dark:!border-blue-400 pb-4 !text-neutral-900 dark:!text-neutral-100">
        {pageTitle}
      </h1>
      {contentToRender ? (
        <ContentRenderer content={contentToRender} />
      ) : (
        <div className="text-center py-10">
          <h2 className="text-2xl font-semibold mb-4">Раздел в разработке</h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            Содержимое для <code>{location.pathname}</code> скоро появится.
          </p>
          <Link
            to="/"
            className="mt-6 inline-block px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            На главную
          </Link>
        </div>
      )}
    </div>
  );
};

export default ContentPage;
