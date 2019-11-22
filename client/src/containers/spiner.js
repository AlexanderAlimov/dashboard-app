import { connect } from "react-redux";
import Spiner from "../components/spiner";

const mapStateToProps = state => ({
  loading: state.user.isLoading
});

export default connect(mapStateToProps)(Spiner);
