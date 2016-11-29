import React, { Component, PropTypes } from 'react'
import FishEdit from './FishEdit.jsx'

export default class FishEditList extends Component {
    render() {
        return (
            <div>
                {this.props.fishes.map(fish =>
                    <FishEdit
                        key = {fish.id}
                        data = {fish}
                    />
                )}
            </div>
        )
    }
}
