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
      <div className={style.education}>
        <h4>Education</h4>
        <ul className={style.yearly}>
          <li>
            <span className={style.year}>2000 - 2006</span>
            <span className={style.educate}>SD Yaspen Tugu Ibu</span>
          </li>
          <li>
            <span className={style.year}>2006 - 2009</span>
            <span className={style.educate}>SMPN 4 Depok</span>
          </li>
          <li>
            <span className={style.year}>2009 - 2012</span>
            <span className={style.educate}>SMA Lazuardi GIS</span>
          </li>
          <li>
            <span className={style.year}>2012 - today</span>
            <span className={style.educate}>SARMAG (Faculty of Industry)</span>
          </li>
        </ul>
      </div>
    );
  }

})
