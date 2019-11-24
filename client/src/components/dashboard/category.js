import React from "react";

function Category({ name, onClick, catId }) {
  return (
    <a
      href="#"
      onClick={() => {
        onClick(catId);
      }}
    >
      {name}
    </a>
  );
}
export default Category;
