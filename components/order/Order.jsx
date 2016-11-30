import React, { Component, PropTypes } from 'react';

export default class Order extends Component {
    constructor(props) {
        super(props);

        this.removeOrder = this.removeOrder.bind(this);
    }

    render() {
        return (
            <li className="">
                <span>
                    <span>
                        <span>{this.props.data.quantity}</span>
                    </span>
                    lbs
                    {this.props.data.fishName}
                    <button onClick={this.removeOrder}>×</button>
                </span>
                <span className="price">${(this.props.data.fishPrice * this.props.data.quantity)}</span>
            </li>
        )
    }

    removeOrder() {
        this.props.onRemoveClick(this.props.data.id);
    }
}
