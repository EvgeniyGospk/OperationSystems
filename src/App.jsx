// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ContentPage from "./pages/ContentPage";
import { osData } from "./data/osData";

function App() {
  // Рекурсивная функция для создания маршрутов из osData
  const renderRoutes = (dataItems) => {
    if (!dataItems) return null;

    return dataItems.flatMap((item) => {
      // Используем flatMap для удобства
      const currentRoute = (
        <Route
          key={item.id}
          path={item.path}
          element={<ContentPage />} // Все пути ведут на ContentPage
        />
      );

      // Рекурсивно создаем маршруты для подразделов
      const subRoutes = item.subsections ? renderRoutes(item.subsections) : [];

      return [currentRoute, ...subRoutes];
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Главная страница (будет редирект или приветствие из ContentPage) */}
          <Route index element={<ContentPage />} />

          {/* Генерируем маршруты из osData */}
          {renderRoutes(osData)}

          {/* Страница 404 - если ни один маршрут не совпал */}
          <Route
            path="*"
            element={
              <div className="text-center py-20">
                <h1 className="text-4xl font-bold mb-4">404</h1>
                <p className="text-xl text-neutral-600 dark:text-neutral-400">
                  Страница не найдена
                </p>
                <Link
                  to="/"
                  className="mt-6 inline-block px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Вернуться на главную
                </Link>
              </div>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
