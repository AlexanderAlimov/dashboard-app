import { connect } from "react-redux";
import { removeCategory, removeCategoriesAsync } from "../actions";
import RemoveCategoryBtn from "../components/buttons/rem-categ-btn";

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeCategory: () => dispatch(removeCategoriesAsync(ownProps.catId))
});

export default connect(
  null,
  mapDispatchToProps
)(RemoveCategoryBtn);
