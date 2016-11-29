import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'

import Header from './components/Header.jsx'
import AddFish from './components/AddFish.jsx'
import FishList from './components/FishList.jsx'
import OrderList from './components/OrderList.jsx'
import Github from './components/Github.jsx'
import Inventory from './components/Inventory.jsx'

var provider = new firebase.auth.GithubAuthProvider();

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
          authenticated: false
        }

        this.signInGithub = this.signInGithub.bind(this);
        this.logout = this.logout.bind(this);
    }

    render() {
        const { dispatch, visibleFishes } = this.props

        return (
            <div>
                <label htmlFor="fold">Fold</label>
                <input type="checkbox" id="fold" />

                <div id="main">
                    <div className="catch-of-the-day">
                        <div className="menu">
                            <Header />
                            <FishList fishes={visibleFishes} />
                        </div>

                        <OrderList />

                        {this.state.authenticated ? <Inventory onLogoutClick={this.logout}
                            visibleFishes={visibleFishes} dispatch={dispatch} /> : <Github onSignInClick={this.signInGithub} />}
                    </div>
                </div>
            </div>
        )
    }

    signInGithub(){
        var parent = this;

        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;
            parent.setState({authenticated: true})
        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
    }

    logout(){
        this.setState({authenticated: false});
    }

}

function mapStateToProps(state) {
    return {
        visibleFishes: state.fishes
    }
}

export default connect(mapStateToProps)(App)
