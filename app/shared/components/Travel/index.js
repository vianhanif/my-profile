import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { Carousel } from 'react-responsive-carousel'
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
    const images = require('./images').default
    return (
      <div className={style.achievement}>
        <h4>Travel</h4>
        <div className={style.panel}>
          <Carousel emulateTouch showIndicators={false} showThumbs={false} showStatus={false}>
            {images.map((image, index) => {
              return (
                <div key={index} className={style.image} style={{backgroundImage: `url(${image})`}}>
                </div>
              )
            })}
          </Carousel>
        </div>
      </div>
    );
  }

})
