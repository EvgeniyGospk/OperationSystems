// src/pages/ContentPage.jsx
import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { osData } from "../data/osData"; // Импортируем ТОЛЬКО osData
import ContentRenderer from "../components/ContentRenderer";

// Вспомогательная функция для рекурсивного поиска элемента по пути
const findItemRecursive = (items, path) => {
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
  if (currentPath === "/") {
    return crumbs;
  }

  const pathSegments = currentPath.split("/").filter(Boolean); // ['introduction', 'concepts']
  let accumulatedPath = "";
  let currentLevelData = dataToSearch;

  for (const segment of pathSegments) {
    accumulatedPath += `/${segment}`;
    const foundItem = currentLevelData.find(
      (item) => item.path === accumulatedPath
    );
    if (foundItem) {
      crumbs.push({ title: foundItem.title, path: foundItem.path });
      currentLevelData = foundItem.subsections || [];
    } else {
      // Если не нашли по полному пути, это может быть конечный элемент без подразделов
      // или ошибка в пути/данных. Для простоты, прерываем здесь.
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
    // Редирект с главной страницы на первый доступный раздел/подраздел, если на "/" нет контента
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
    // Если это раздел-контейнер без собственного контента, но с подразделами,
    // можно отобразить заглушку или список подразделов.
    // Или, если есть первый подраздел, можно редиректить на него.
    // Для простоты пока показываем заглушку.
    pageTitle = currentItem.title;
    contentToRender = [
      {
        type: "paragraph",
        text: `Это обзорный раздел для "${currentItem.title}". Выберите подраздел для изучения.`,
      },
      // Можно также сгенерировать список ссылок на подразделы:
      // { type: 'list', items: currentItem.subsections.map(sub => `<a href="${sub.path}">${sub.title.replace(/^(\d+\.\d+\.\s*)/, '')}</a>`) }
    ];
  } else if (location.pathname === "/") {
    // Этот блок скорее всего не будет достигнут из-за редиректа выше,
    // но оставим как запасной вариант.
    pageTitle = "Добро пожаловать!";
    contentToRender = [
      {
        type: "paragraph",
        text: "Выберите раздел для изучения в меню слева. Если вы видите эту страницу, возможно, автоматический переход на первый раздел не сработал.",
      },
    ];
  }

  return (
    <div className="bg-white dark:bg-neutral-800/70 shadow-xl rounded-xl p-6 md:py-8 md:px-10 ring-1 ring-inset ring-neutral-200 dark:ring-neutral-700/50">
      {/* Хлебные крошки */}
      {breadcrumbs &&
        breadcrumbs.length > 1 && ( // Показываем крошки, если их больше одной (Главная)
          <nav
            aria-label="breadcrumb"
            className="mb-6 text-sm text-neutral-500 dark:text-neutral-400"
          >
            <ol className="list-none p-0 inline-flex flex-wrap gap-x-1">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && (
                    <span className="mx-1 text-neutral-400 dark:text-neutral-500">
                      /
                    </span>
                  )}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-neutral-700 dark:text-neutral-300 font-semibold">
                      {crumb.title.replace(/^(\d+\.[\d.]*\s*)/, "")}
                    </span>
                  ) : (
                    <Link
                      to={crumb.path}
                      className="hover:underline text-neutral-600 dark:text-neutral-400 hover:text-[--color-accent] dark:hover:text-[--color-accent-dark]"
                    >
                      {crumb.title.replace(/^(\d+\.[\d.]*\s*)/, "")}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

      {/* Заголовок страницы */}
      <h1 className="!text-3xl md:!text-4xl font-extrabold mb-8 !border-b-2 !border-[--color-accent] dark:!border-[--color-accent-dark] pb-4 !text-neutral-900 dark:!text-neutral-100">
        {pageTitle.replace(/^(\d+\.[\d.]*\s*)/, "")}
      </h1>

      {/* Отображение контента */}
      {contentToRender && contentToRender.length > 0 ? (
        <ContentRenderer content={contentToRender} />
      ) : (
        <div className="text-center py-10">
          <h2 className="text-2xl font-semibold mb-4 text-neutral-700 dark:text-neutral-300">
            Раздел в разработке
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            Содержимое для <code>{location.pathname}</code> скоро появится, или
            выберите другой раздел.
          </p>
          <Link
            to="/"
            className="mt-8 inline-block px-6 py-3 bg-[--color-accent] text-white rounded-lg hover:bg-[--color-accent-hover] dark:bg-[--color-accent-dark] dark:hover:bg-sky-500 transition-colors font-semibold shadow-md"
          >
            На главную (к первому разделу)
          </Link>
        </div>
      )}
    </div>
  );
};

export default ContentPage;
