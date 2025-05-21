// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import ContentPage from "./pages/ContentPage"; // Наш новый компонент
import { osData } from "./data/osData";

function App() {
  // Функция для рекурсивного создания маршрутов
  const createRoutes = (data) => {
    let routes = [];
    data.forEach((item) => {
      // Маршрут для самого элемента (раздела или подраздела с контентом)
      if (item.content || (item.subsections && item.subsections.length > 0)) {
        // Добавляем маршрут, если есть контент или подразделы
        routes.push(
          <Route key={item.id} path={item.path} element={<ContentPage />} />
        );
      }

      // Рекурсивно создаем маршруты для подразделов
      if (item.subsections) {
        routes = routes.concat(createRoutes(item.subsections));
      }
    });
    return routes;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Главная страница */}
          <Route index element={<ContentPage />} />{" "}
          {/* Для отображения приветствия или чего-то на / */}
          {/* Генерируем маршруты из osData */}
          {createRoutes(osData)}
          {/* Можно добавить 404 страницу */}
          <Route path="*" element={<div>Страница не найдена</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
