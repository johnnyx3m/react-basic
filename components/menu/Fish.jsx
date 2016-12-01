import React, { Component, PropTypes } from 'react';

export default class Fish extends Component {
    render() {
        return (
            <li className="menu-fish">
                <img src={this.props.data.imageUrl} alt={this.props.data.fishName} />
                <h3 className="fish-name">
                    {this.props.data.fishName}
                    <span className="price">${parseInt(this.props.data.fishPrice, 10).toFixed(2)}</span>
                </h3>
                <p>{this.props.data.fishDescription}</p>

                {
                    this.props.data.status == 'available' ?
                    <button onClick={(e) => this.addOrder(e)}>Add To Order</button> :
                    <button disabled="disabled">Sold Out!</button>
                }
            </li>
        )
    }

    addOrder(e) {
        e.preventDefault();
        let order = this.props.data;
        let qty = 1;
        let data = {
            id: order.id,
            quantity: qty++,
            fishName: order.fishName,
            fishPrice: parseInt(order.fishPrice, 10).toFixed(2)
        };

        this.props.onAddOrder(data);
    }
}
