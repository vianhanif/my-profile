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
    const social = require('./social').default
    return (
      <div className={style.myname}>
        <div className={style.image}>
          <img src={require('@css/images/me.png')} alt="my-image" />
        </div>
        <h4>Vian Hanif</h4>
        <div>
          <ul className={style.social}>
            {social.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.url} target="_blank">{link.desc}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={style.description}>
          <div>
            <p>
              living in Depok, Indonesia.
            </p>
            <p>
              A software engineer. A kid. A brother. Movie lover. Korean lover.
            </p>
          </div>
        </div>
      </div>
    );
  }

})
