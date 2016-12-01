import React, { Component, PropTypes } from 'react';
import Fish from './Fish.jsx';
import { addOrder } from '../../actions';

export default class FishList extends Component {
    render() {
        return (
            <ul className="list-of-fishes">
                {this.props.fishes.map((fish, index) =>
                    <Fish
                        key={index}
                        data={fish}
                        orderedFishes={this.props.orderedFishes}
                        onAddOrder={orderedFish => {
                            this.props.dispatch(addOrder(orderedFish))
                        }}
                    />
                )}
            </ul>
        )
    }
}
