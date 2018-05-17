import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import Emoji from 'react-emoji-render'
import { loadUser } from '@reducers/OAuth/actions'
import '../../assets/styling/pages/Admin/index.scss'

export default connect(
  state => ({ ...state }),
  dispatch => bindActionCreators({ loadUser }, dispatch)
)(class Home extends Component {

  static fetchData({ store, route, match}) {
    return Promise.all([])
  }

  static propTypes = {

  };

  constructor(props) {
    super(props);
    this.state = {
      openAccess: null
    };
  }

  componentWillMount() {
    this.props.loadUser().then(() => {
      if (this.props.oauth.value.email === 'alvian524@gmail.com') {
        this.setState({openAccess: true})
      } else {
        this.setState({openAccess: false})
      }
    })
  }

  render() {
    let { openAccess } = this.state
    return (
      <div className="contained page" id="login">
        {openAccess !== null && <React.Fragment>
          {openAccess && <div className="panel">
            <h4>Admin Page</h4>
          </div>}
          {!openAccess && <div className="panel">
            <h4><Emoji text=":disappointed_relieved: You're not him"/></h4>
          </div>}
        </React.Fragment>}
      </div>
    );
  }

})
