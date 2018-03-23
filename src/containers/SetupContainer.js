import { connect } from "react-redux";
import Setup from "../components/Setup";
import { setupSubmit } from "../actions";

const mapDispatchToProps = dispatch => ({
    sumbitSetup: () => {dispatch(setupSubmit)}
})

export default connect(
  mapDispatchToProps
)(Setup);
