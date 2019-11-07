import React, { useEffect } from "react";
import Category from "./category";
import RemoveCategoryBtn from "../containers/remove-category";

function CategoryList(props) {
  useEffect(() => {
    props.getCategories();
  }, []);

  const { filterProductsByCategory } = props;
  const category = props.categories.map(el => {
    const removeBtn =
      el.name === "Without Category" ? (
        <span></span>
      ) : (
        <RemoveCategoryBtn catId={el.id} />
      );
    return (
      <li key={el.id}>
        {removeBtn}
        <Category
          name={el.name}
          onClick={filterProductsByCategory}
          catId={Number(el.id)}
        />
      </li>
    );
  });
  return <ul className="col-category-list">{category}</ul>;
}

export default CategoryList;
