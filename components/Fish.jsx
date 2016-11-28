import React, { Component, PropTypes } from 'react'

export default class Fish extends Component {
   render() {
      return (
         <li className="menu-fish">
             <img src={this.props.data.imageUrl} alt={this.props.data.fishName} />
             <h3 className="fish-name">
                  {this.props.data.fishName}
                 <span className="price">${this.props.data.fishPrice}</span>
             </h3>
             <p>{this.props.data.fishDescription}</p>
             <button>Add To Order</button>
         </li>
      )
   }
}
