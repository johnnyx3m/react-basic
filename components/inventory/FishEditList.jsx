import React, { Component, PropTypes } from 'react';
import FishEdit from './FishEdit.jsx';
import { removeFish } from '../../actions';

export default class FishEditList extends Component {
    render() {
        return (
            <div>
                {this.props.fishes.map((fish, index) =>
                    <FishEdit
                        key={index}
                        data={fish}
                        fishes={this.props.availableFishes}
                        onRemoveClick={key => {
                            this.props.dispatch(removeFish(key))
                        }}
                    />
                )}
            </div>
        )
    }
}
