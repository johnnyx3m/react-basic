import React, { Component, PropTypes } from 'react'

export default class AddFish extends Component {
   render() {
      return (
         <div>
             <h2>Inventory</h2>
             <button>Log Out!</button>

             <form className="fish-edit" onSubmit = {(e) => this.handleClick(e)}>
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

             <nav className="login">
                 <p>Sign in to manage your store's inventory</p>
                 <button className="github">Log In with Github</button>
             </nav>
         </div>
      )
   }

   handleClick(e) {
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
}
