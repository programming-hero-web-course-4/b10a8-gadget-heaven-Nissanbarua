import React from "react";

const Sidebar = ({ categories, activeCategory, handleCategoryChange }) => {
  return (
<aside className="w-1/4 p-4 mb-10 bg-gray-100">
      <h2 className="text-lg font-bold mb-4">Categories</h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className={`cursor-pointer p-2 rounded-md mb-2 ${
              activeCategory === category
                ? "bg-purple-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
