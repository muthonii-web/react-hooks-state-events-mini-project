import React from "react";

const CategoryFilter = ({ categories, onCategorySelect }) => {
  return (
    <div>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategorySelect(category)}
          className={category === "All" ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
