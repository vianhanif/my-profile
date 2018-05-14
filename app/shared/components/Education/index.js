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
    const educations = require('./educations').default
    const title = `Read & <span style="color: #FFEE58;">Play</span>grounds`
    return (
      <div className={style.education}>
        <h4 dangerouslySetInnerHTML={{__html: title}}/>
        <div className={style.panel}>
          <table className={style.yearly}>
            {educations.map((edu, index) => {
              return (
                <tr key={index}>
                  <td className={style.year}>{edu.from} - {edu.to}</td>
                  <td className={style.educate}>{edu.desc}</td>
                </tr>
              )
            })}
          </table>
        </div>
      </div>
    );
  }

})
