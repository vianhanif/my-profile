import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import style from './style.scss'

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
    const achievements = require('./achievements').default
    return (
      <div className={style.achievement}>
        <h4>A Few Moments to Remember</h4>
        <div className={style.inlined}>
          <div className={style.panel}>
            {achievements.slice(0, 3).map((achieve, index) => {
              return (
                <div key={index} className={style.achieve}>
                  <img src={achieve.icon}/>
                  <p>
                    <span className={style.year}>{achieve.year}</span>
                    <span className={style.desc} dangerouslySetInnerHTML={{__html: achieve.desc}}/>
                  </p>
                </div>
              )
            })}
          </div>
          <div className={style.panel}>
            {achievements.slice(3).map((achieve, index) => {
              return (
                <div key={index} className={style.achieve}>
                  <img src={achieve.icon}/>
                  <p>
                    <span className={style.year}>{achieve.year}</span>
                    <span className={style.desc} dangerouslySetInnerHTML={{__html: achieve.desc}}/>
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }

})
