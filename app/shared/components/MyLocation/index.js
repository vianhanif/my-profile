import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
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
    const position = {
      lat: -6.395497,
      lng: 106.835376
    }
    const MyMap = withScriptjs(withGoogleMap((props) => {
      return (
        <GoogleMap
          defaultZoom={20}
          defaultCenter={position}>
          <Marker position={position}></Marker>
        </GoogleMap>
      )
    }))
    return (
      <div className={style.my_location}>
        <MyMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          />
      </div>
    );
  }

})
