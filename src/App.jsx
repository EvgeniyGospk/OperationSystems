// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Link здесь нужен
import Layout from "./components/Layout";
import ContentPage from "./pages/ContentPage";
import { osData } from "./data/osData";

function App() {
  const renderRoutes = (dataItems) => {
    if (!dataItems) return null;

    return dataItems.flatMap((item) => {
      const currentRoute = (
        <Route key={item.id} path={item.path} element={<ContentPage />} />
      );
      const subRoutes = item.subsections ? renderRoutes(item.subsections) : [];
      return [currentRoute, ...subRoutes];
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ContentPage />} />
          {renderRoutes(osData)}
          <Route
            path="*"
            element={
              <div className="text-center py-20 px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                  404
                </h1>
                <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-8">
                  Страница не найдена
                </p>
                <Link // Link используется здесь
                  to="/"
                  className="mt-6 inline-block px-8 py-3 bg-[--color-accent] text-white rounded-lg hover:bg-[--color-accent-hover] dark:bg-[--color-accent-dark] dark:hover:bg-sky-500 transition-colors font-semibold shadow-md text-lg"
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
