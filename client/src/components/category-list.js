import React from "react";
import { connect } from "react-redux";
import Category from "./category";
import RemoveCategoryBtn from "../containers/remove-category";
import { filterProductsByCategory } from "../actions";

function CategoryList(props) {
  const { showFilterProducts } = props;
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
          onClick={showFilterProducts}
          catId={Number(el.id)}
        />
      </li>
    );
  });
  return <ul className="col-category-list">{category}</ul>;
}

const mapStateToProps = state => ({
  categories: state.categories
});
const mapDisPatchToProps = dispatch => ({
  showFilterProducts: categoryId =>
    dispatch(filterProductsByCategory(categoryId))
});

export default connect(
  mapStateToProps,
  mapDisPatchToProps
)(CategoryList);
