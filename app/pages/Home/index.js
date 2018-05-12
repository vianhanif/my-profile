import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import {
  MyName,
  Education,
  Travel,
  Skill,
  Timeline
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
        <div className="col profile">
          <div className="col-40">
            <MyName/>
            <Education/>
          </div>
          <div className="col-60 only-desktop">
            <Travel/>
          </div>
        </div>
        <div className="col achievement not-desktop">
          <div className="col-100">
            <Travel/>
          </div>
        </div>
        {/*

        <div className="col skill">
          <div className="col-100">
            <Skill/>
          </div>
        </div>
        <div className="col timeline">
          <div className="col-80-centered">
            <Timeline/>
          </div>
        </div>
        */}
      </div>
    );
  }

})
