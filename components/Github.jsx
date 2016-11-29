import React, { Component, PropTypes } from 'react'

export default class Github extends Component {
    render() {
        return (
          <nav className="login">
              <p>Sign in to manage your store's inventory</p>
              <button onClick = {this.props.onSignInClick} className="github">Log In with Github</button>
          </nav>
        )
    }
}
