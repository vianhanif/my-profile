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
    const skills = require('./skills').default
    const title = `{<span style="color: #FFEE58;">Object</span>} to play with`
    return (
      <div className={style.skill}>
        <h4 dangerouslySetInnerHTML={{__html: title}}/>
        <div className={style.panel}>
          <ul>
            {skills.map((skill, index) => {
              return (
                <li key={index}>
                  <div className={style.image}>
                    <img src={skill.icon} alt=""/>
                  </div>
                  <p>{skill.desc}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }

})
