import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { loadToken } from '@reducers/OAuth/actions'
import { bindActionCreators } from 'redux'
import '../../assets/styling/pages/Login/index.scss'

export default connect(
  state => ({ ...state }),
  dispatch => bindActionCreators({ loadToken }, dispatch)
)(withRouter(class Home extends Component {

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

  componentWillMount() {
    const qs = require('query-string')
    const token = qs.parse(this.props.location.search).token
    this.props.loadToken(token).then(() => {
      this.props.history.push('/admin')
    })
  }

  render() {
    return (
      <div className="contained page" id="login">
      </div>
    );
  }

}))
