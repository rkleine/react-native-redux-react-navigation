import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AppComponent from './AppComponent';
import * as AppActions from './AppActions';

const mapStateToProps = state => {
  return {
    nav: state.nav,
    seconds: state.app.seconds,
    token: state.auth.token
  };
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AppActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
