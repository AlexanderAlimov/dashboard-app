import React from "react";
import { connect } from "react-redux";
import Category from "./category";
import RemoveCategoryBtn from "../containers/remove-category";

function CategoryList(props) {
  const category = props.categories.map(el => {
    return (
      <li key={el.id}>
        <RemoveCategoryBtn catId={el.id} />
        <Category name={el.name} />
      </li>
    );
  });
  return <ul className="col-category-list">{category}</ul>;
}

const mapStateToProps = state => ({
  categories: state.categories
});

export default connect(mapStateToProps)(CategoryList);
