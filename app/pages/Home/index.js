import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { loadData } from '../../modules/App/actions'
import '../../assets/styling/pages/Home/index.scss'

export default connect(
  state => ({ ...state }),
  dispatch => bindActionCreators({ loadData }, dispatch)
)(class Home extends Component {

  static fetchData({ store, route, match}) {
    return Promise.all([
      store.dispatch(loadData())
    ])
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
      <div className="page" id="home">
        <div className="section menu">{JSON.stringify(this.props.app.value)}</div>
        <div className="section header">
          <Link to="/about">Go to About Page</Link>
        </div>
        <div className="section content">
          Home Page
        </div>
        <div className="section sign-up"></div>
        <div className="section feature-1"></div>
        <div className="section feature-2"></div>
        <div className="section feature-3"></div>
      </div>
    );
  }

})
