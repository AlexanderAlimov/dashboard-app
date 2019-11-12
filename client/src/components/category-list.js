import React, { useEffect } from "react";
import Category from "./category";
import RemoveCategoryBtn from "../containers/remove-category";

function CategoryList({
  getCategories = () => {},
  categories = [],
  getProducts = () => {}
}) {
  useEffect(() => {
    getCategories();
  }, []);
  const category = categories.map(el => {
    const removeBtn =
      el.name === "Without Category" ? (
        <span></span>
      ) : (
        <RemoveCategoryBtn catId={el._id} />
      );
    return (
      <li key={el.id}>
        {removeBtn}
        <Category name={el.name} onClick={getProducts} catId={el._id} />
      </li>
    );
  });
  return <ul className="col-category-list">{category}</ul>;
}

export default CategoryList;
