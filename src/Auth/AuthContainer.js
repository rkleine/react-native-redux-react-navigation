import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AuthComponent from './AuthComponent';
import * as AuthActions from './AuthActions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AuthActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthComponent);
