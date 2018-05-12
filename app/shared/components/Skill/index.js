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
    return (
      <div className={style.skill}>
        <ul>
          <li>
            <div className={style.image}>
              <img src="" alt=""/>
            </div>
            <p>Photoshop</p>
          </li>
          <li>
            <div className={style.image}>
              <img src="" alt=""/>
            </div>
            <p>Illustrator</p>
          </li>
          <li>
            <div className={style.image}>
              <img src="" alt=""/>
            </div>
            <p>Java</p>
          </li>
          <li>
            <div className={style.image}>
              <img src="" alt=""/>
            </div>
            <p>PHP</p>
          </li>
          <li>
            <div className={style.image}>
              <img src="" alt=""/>
            </div>
            <p>Ruby</p>
          </li>
          <li>
            <div className={style.image}>
              <img src="" alt=""/>
            </div>
            <p>Javascript</p>
          </li>
          <li>
            <div className={style.image}>
              <img src="" alt=""/>
            </div>
            <p>Python</p>
          </li>
          <li>
            <div className={style.image}>
              <img src="" alt=""/>
            </div>
            <p>C++</p>
          </li>
          <li>
            <div className={style.image}>
              <img src="" alt=""/>
            </div>
            <p>HTML</p>
          </li>
          <li>
            <div className={style.image}>
              <img src="" alt=""/>
            </div>
            <p>CSS</p>
          </li>
          <li>
            <div className={style.image}>
              <img src="" alt=""/>
            </div>
            <p>Shellscript</p>
          </li>
          <li>
            <div className={style.image}>
              <img src="" alt=""/>
            </div>
            <p>Rails</p>
          </li>
          <li>
            <div className={style.image}>
              <img src="" alt=""/>
            </div>
            <p>Vue.js</p>
          </li>
          <li>
            <div className={style.image}>
              <img src="" alt=""/>
            </div>
            <p>React.js</p>
          </li>
          <li>
            <div className={style.image}>
              <img src="" alt=""/>
            </div>
            <p>SASS</p>
          </li>
          <li>
            <div className={style.image}>
              <img src="" alt=""/>
            </div>
            <p>Webpack</p>
          </li>
        </ul>
      </div>
    );
  }

})
