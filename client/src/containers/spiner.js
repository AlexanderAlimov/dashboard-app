import { connect } from "react-redux";
import Spiner from "../components/spiner";

const mapStateToProps = state => ({
  loading: state.loading
});

export default connect(mapStateToProps)(Spiner);
