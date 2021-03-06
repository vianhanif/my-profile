import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import Emoji from 'react-emoji-render'
import { Analytics } from '../../../client/Analytics';
import {
  MyName,
  Education,
  Travel,
  Skill,
  Achievement,
  Timeline,
  Experience
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

  componentDidMount() {
    Analytics.InitAnalytics()
    Analytics.savePageToAnalytics(window.location.pathname + window.location.search)
  }

  render() {
    return (
      <div className="contained page" id="home">
        <div className="col profile">
          <div className="col-40">
            <MyName/>
            <Skill className="not-desktop"/>
            <Education/>
          </div>
          <div className="col-60 only-desktop">
            <Travel/>
          </div>
        </div>
        <div className="col travel not-desktop">
          <div className="col-100">
            <Travel/>
          </div>
        </div>
        <div className="col sectioned other">
          <div className="col-70">
            <Achievement/>
          </div>
          <div className="col-30 only-desktop">
            <Skill/>
          </div>
        </div>
        <div className="col sectioned other">
          <div className="col-100">
            <Experience/>
          </div>
        </div>
        <div className="col sectioned other">
          <div className="col-100">
            <p className="info-soon">and more insight coming soon <Emoji text=":wink:"/></p>
          </div>
        </div>
      </div>
    );
  }

})
