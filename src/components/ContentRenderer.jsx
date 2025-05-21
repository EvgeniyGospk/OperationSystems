// src/components/ContentRenderer.jsx
import React from "react";

// Компонент для безопасного рендеринга HTML
const DangerousHTML = ({ html }) => {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

const ContentRenderer = ({ content }) => {
  if (!content) {
    return (
      <p className="text-neutral-500 dark:text-neutral-400">
        Контент для этого раздела еще не добавлен.
      </p>
    );
  }

  return (
    <div className="prose dark:prose-invert max-w-none">
      {" "}
      {/* Используем Tailwind Typography для стилизации */}
      {content.map((item, index) => {
        switch (item.type) {
          case "paragraph":
            return (
              <p key={index}>
                <DangerousHTML html={item.text} />
              </p>
            );
          case "heading":
            const Tag = `h${item.level || 2}`; // h2 по умолчанию
            return (
              <Tag key={index}>
                <DangerousHTML html={item.text} />
              </Tag>
            );
          case "list":
            const ListTag = item.ordered ? "ol" : "ul";
            return (
              <ListTag
                key={index}
                className={
                  item.ordered ? "list-decimal ml-5" : "list-disc ml-5"
                }
              >
                {item.items.map((li, i) => (
                  <li key={i}>
                    <DangerousHTML html={li} />
                  </li>
                ))}
              </ListTag>
            );
          case "code":
            return (
              <pre
                key={index}
                className="bg-neutral-800 dark:bg-black text-white p-4 rounded-md overflow-x-auto my-4"
              >
                <code className={`language-${item.language || "plaintext"}`}>
                  {item.code}
                </code>
              </pre>
            );
          case "table":
            return (
              <div key={index} className="overflow-x-auto my-4">
                <table className="min-w-full border-collapse border border-neutral-300 dark:border-neutral-600">
                  <thead>
                    <tr>
                      {item.headers.map((header, hIndex) => (
                        <th
                          key={hIndex}
                          className="border border-neutral-300 dark:border-neutral-600 px-4 py-2 bg-neutral-100 dark:bg-neutral-700 text-left font-semibold"
                        >
                          <DangerousHTML html={header} />
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {item.rows.map((row, rIndex) => (
                      <tr key={rIndex}>
                        {row.map((cell, cIndex) => (
                          <td
                            key={cIndex}
                            className="border border-neutral-300 dark:border-neutral-600 px-4 py-2"
                          >
                            <DangerousHTML html={cell} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "blockquote":
            return (
              <blockquote
                key={index}
                className="border-l-4 border-neutral-400 dark:border-neutral-500 pl-4 italic my-4"
              >
                <DangerousHTML html={item.text} />
              </blockquote>
            );
          default:
            return (
              <p key={index} className="text-red-500">
                Неизвестный тип контента: {item.type}
              </p>
            );
        }
      })}
    </div>
  );
};

export default ContentRenderer;
