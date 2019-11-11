import { connect } from "react-redux";
import { removeCategory, dispatchWithParams } from "../actions";
import RemoveCategoryBtn from "../components/buttons/rem-categ-btn";

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeCategory: dispatchWithParams(dispatch, () =>
    removeCategory(ownProps.catId)
  )
});

export default connect(
  null,
  mapDispatchToProps
)(RemoveCategoryBtn);
