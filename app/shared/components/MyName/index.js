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
      <div className={style.myname}>
        <div className={style.image}>
          <img src={require('@css/images/me.png')} alt="my-image" />
        </div>
        <h4>Vian Hanif</h4>
        <div>
          <ul className={style.social}>
            <li>
              <a href="https://www.facebook.com/vian.hanif.1" target="_blank">Facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com/vianhanif.in/" target="_blank">Instagram</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/vianhanif/" target="_blank">Linkedin</a>
            </li>
          </ul>
        </div>
        <div className={style.description}>
          <div>
            <p>
              Single. Born in 29 December 1993, first child of 4 siblings.
            </p>
            <p>
              Excited to work as teams and always interested in Front End and Software Engineering.
            </p>
          </div>
        </div>
      </div>
    );
  }

})
