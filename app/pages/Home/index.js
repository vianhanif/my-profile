import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import {
  MyName,
  Education
} from '@components/'
import '../../assets/styling/pages/Home/index.scss'

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
      <div className="contained page" id="home">
        <div className="col">
          <div className="col-40">
            <MyName/>
            <Education/>
          </div>
          <div className="col-60">
            ASDD
          </div>
        </div>
      </div>
    );
  }

})
