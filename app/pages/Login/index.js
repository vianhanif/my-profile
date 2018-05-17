import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import '../../assets/styling/pages/Login/index.scss'

export default connect(
  state => ({ ...state }),
  dispatch => bindActionCreators({ }, dispatch)
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
          <h4>Is it you ?</h4>
          <a href="/api/oauth/login">
            <img src={require('@css/images/github.png')}/>
          </a>
        </div>
      </div>
    );
  }

})
