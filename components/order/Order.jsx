import React, { Component, PropTypes } from 'react';

export default class Order extends Component {
    render() {
        return (
            <li className="">
                <span>
                    <span>
                        <span>{this.props.data.quantity}</span>
                    </span>
                    lbs
                    {this.props.data.fishName}
                    <button>×</button>
                </span>
                <span className="price">${this.props.data.fishPrice}</span>
            </li>
        )
    }
}
