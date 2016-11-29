import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addFish } from './actions'
import firebase from 'firebase'

import Header from './components/Header.jsx'
import AddFish from './components/AddFish.jsx'
import FishList from './components/FishList.jsx'
import OrderList from './components/OrderList.jsx'
import FishEditList from './components/FishEditList.jsx'
import Github from './components/Github.jsx'

var provider = new firebase.auth.GithubAuthProvider();

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
          authenticated: false
        }

        this.signInGithub = this.signInGithub.bind(this);
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
                            <FishList fishes = {visibleFishes} />
                        </div>

                        <OrderList />

                        <div>
                            <h2>Inventory</h2>
                            <button>Log Out!</button>

                            <FishEditList fishes={visibleFishes} />

                            <AddFish onAddClick = {data => {
                                dispatch(addFish(data))
                            }}/>

                            {this.state.authenticated ? "": <Github onSignInClick = {this.signInGithub}/>}

                        </div>
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
            parent.forceUpdate();
        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
    }

}

function mapStateToProps(state) {
    return {
        visibleFishes: state.fishes
    }
}

export default connect(mapStateToProps)(App)
