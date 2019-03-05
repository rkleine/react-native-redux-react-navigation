import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ExampleComponent from './ExampleComponent';
import * as ExampleActions from './ExampleActions';

const mapStateToProps = (state, props) => ({
  seconds: state.app.seconds,
  paramsExample: props.navigation.getParam('paramsExample', 0)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ExampleActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);
