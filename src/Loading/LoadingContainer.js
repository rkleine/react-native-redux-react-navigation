import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LoadingComponent from './LoadingComponent';
import * as LoadingActions from './LoadingActions';

const mapStateToProps = state => ({
  token: state.auth.token
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(LoadingActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoadingComponent);
