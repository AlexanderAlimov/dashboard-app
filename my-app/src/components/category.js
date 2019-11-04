import React from "react";

function Category({ name, onClick, catId }) {
  return <a href="#" onClick={onClick.bind(null,catId)}>{name}</a>;
}
export default Category;
