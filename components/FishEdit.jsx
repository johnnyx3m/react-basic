import React, { Component, PropTypes } from 'react'

export default class Fish extends Component {
    render() {
        return (
            <div className="fish-edit">
                <input type="text" ref="fishName" placeholder="Fish Name" value={this.props.data.fishName} />
                <input type="number" ref="fishPrice" placeholder="Fish Price" value={this.props.data.fishPrice} />
                <select ref="status">
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea type="text" ref="fishDescription" placeholder="Desc" value={this.props.data.fishDescription}></textarea>
                <input type="text" ref="imageUrl" placeholder="URL to Image" src={this.props.data.imageUrl} />
                <button>Remove Fish</button>
            </div>
        )
    }
}
