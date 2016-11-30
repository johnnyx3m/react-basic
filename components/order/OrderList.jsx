import React, { Component, PropTypes } from 'react';

export default class Order extends Component {
    render() {
        return (
            <div className="order-wrap">
                <h2 className="order-title">Your Order</h2>
                <ul className="order">
                    <li className="total">
                        <strong>Total:</strong>
                        $0.00
                    </li>
                </ul>
            </div>
        )
    }
}
