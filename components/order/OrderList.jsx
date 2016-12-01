import React, { Component, PropTypes } from 'react';
import Order from './Order.jsx';
import { removeOrder } from '../../actions';

export default class OrderList extends Component {
    render() {
        let total = 0;

        return (
            <div className="order-wrap">
                <h2 className="order-title">Your Order</h2>
                <ul className="order">
                    {this.props.orderedFishes.map((orderedFish, index) =>
                        <Order
                            key={index}
                            data={orderedFish}
                            fishes={this.props.orderedFishes}
                            onRemoveClick={key => {
                                this.props.dispatch(removeOrder(key))
                            }}
                        />
                    )}
                    <li className="total">
                        <strong>Total:</strong>
                        {this.props.orderedFishes.map((orderedFish, index) => {
                            total += parseInt(orderedFish.fishPrice, 10)
                        })}
                        ${parseInt(total, 10).toFixed(2)}
                    </li>
                </ul>
            </div>
        )
    }
}
