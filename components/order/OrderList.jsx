import React, { Component, PropTypes } from 'react';
import Order from './Order.jsx';
import { removeOrder } from '../../actions';

export default class OrderList extends Component {
    render() {
        return (
            <div className="order-wrap">
                <h2 className="order-title">Your Order</h2>
                <ul className="order">
                    {this.props.orderedFishes.map(orderedFish =>
                        <Order
                            key={orderedFish.id}
                            data={orderedFish}
                            onRemoveClick={key => {
                                this.props.dispatch(removeOrder(key))
                            }}
                        />
                    )}
                    <li className="total">
                        <strong>Total:</strong>
                        $0.00
                    </li>
                </ul>
            </div>
        )
    }
}
