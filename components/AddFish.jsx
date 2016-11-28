import React, { Component, PropTypes } from 'react'
import firebase from 'firebase'
import ReactDOM from 'react-dom'

var provider = new firebase.auth.GithubAuthProvider();

export default class AddFish extends Component {
  constructor(props){
    super(props);
    this.state = {
      authenticated: 0
    };

    this.signInGithub = this.signInGithub.bind(this);
  }
   render() {
      return (
         <div>
             <h2>Inventory</h2>
             <button>Log Out!</button>

             <form className="fish-edit" onSubmit = {(e) => this.handleAddItemClick(e)}>
                 <input type="text" ref="fishName" placeholder="Fish Name" />
                 <input type="text" ref="fishPrice" placeholder="Fish Price" />
                 <select ref="status">
                     <option value="available">Fresh!</option>
                     <option value="unavailable">Sold Out!</option>
                 </select>
                 <textarea type="text" ref="fishDescription" placeholder="Desc"></textarea>
                 <input type="text" ref="imageUrl" placeholder="URL to Image" />
                 <button type="submit">+ Add Item</button>
             </form>
             <button>Load Sample Fishes</button>

             {this.state.test}

             <nav className="login">
                 <p>Sign in to manage your store's inventory</p>
                 <button onClick = {this.signInGithub} className="github">Log In with Github</button>
             </nav>
         </div>
      )
   }

   handleAddItemClick(e) {
      e.preventDefault()
      const {fishName, fishPrice, fishDescription, status, imageUrl} = this.refs
      let data = {
        fishName: fishName.value.trim(),
        fishPrice: fishPrice.value.trim(),
        fishDescription: fishDescription.value.trim(),
        status: status.value.trim(),
        imageUrl: imageUrl.value.trim(),
      }
      this.props.onAddClick(data)
   }

   signInGithub(){

    var parent = this;
     firebase.auth().signInWithPopup(provider).then(function(result) {
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
