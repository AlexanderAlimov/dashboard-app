import { connect } from "react-redux";
import { removeCategory } from "../actions";
import RemoveCategoryBtn from "../components/buttons/rem-categ-btn";

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeCategory: () => dispatch(removeCategory(ownProps.catId))
});

export default connect(
  null,
  mapDispatchToProps
)(RemoveCategoryBtn);
