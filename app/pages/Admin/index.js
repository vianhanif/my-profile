import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { loadToken } from '@reducers/OAuth/actions'
import '../../assets/styling/pages/Admin/index.scss'

export default connect(
  state => ({ ...state }),
  dispatch => bindActionCreators({ loadToken }, dispatch)
)(class Home extends Component {

  static fetchData({ store, route, match}) {
    return Promise.all([])
  }

  static propTypes = {

  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="contained page" id="login">
        <div className="panel">
          <h4>Admin Page {JSON.stringify(this.props.oauth)}</h4>
        </div>
      </div>
    );
  }

})
