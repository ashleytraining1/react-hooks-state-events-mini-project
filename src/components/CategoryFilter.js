import React from "react";

function CategoryFilter({categories, selectedCategory, setSelectedCategory}) {

  const myCategory = categories.map((category) => {
    return <>
     <button
      key={category}
      name={category}
      value={category}
      className={category === selectedCategory ? "selected" : null}
      onClick={() => setSelectedCategory(category)}
    >
      {category}
    </button>
    </>
})

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {myCategory}
    </div>
  );
}

export default CategoryFilter;
