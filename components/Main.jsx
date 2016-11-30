import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'

import Header from './menu/Header.jsx'
import AddFish from './inventory/AddFish.jsx'
import FishList from './menu/FishList.jsx'
import OrderList from './order/OrderList.jsx'
import Github from './inventory/Github.jsx'
import Inventory from './inventory/Inventory.jsx'

var provider = new firebase.auth.GithubAuthProvider();

class Main extends Component {
    constructor(){
        super();
        this.state = {
            authenticated: false
        };

        this.signInGithub = this.signInGithub.bind(this);
        this.logout = this.logout.bind(this);
    }
    render() {
        const { dispatch, availableFishes, orderedFishes } = this.props
        return (
            <div>
                <label htmlFor="fold">Fold</label>
                <input type="checkbox" id="fold" />

                <div id="main">
                    <div className="catch-of-the-day">
                        <div className="menu">
                            <Header />
                            <FishList fishes={availableFishes} dispatch={dispatch} orderedFishes={orderedFishes} />
                        </div>

                        <OrderList orderedFishes={orderedFishes} dispatch={dispatch}/>

                        {
                            this.state.authenticated ?
                            <Inventory onLogoutClick = {this.logout} availableFishes = {availableFishes} dispatch={dispatch} /> :
                            <Github onSignInClick = {this.signInGithub} />
                        }
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
        availableFishes: state.fishes,
        orderedFishes: state.orderedFishes
    }
}

export default connect(mapStateToProps)(Main)
