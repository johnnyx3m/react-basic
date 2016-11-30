import React, { Component, PropTypes } from 'react';

export default class FishEdit extends Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.removeFish = this.removeFish.bind(this);
    }

    render() {
        return (
            <div className="fish-edit">
                <input type="text" ref="fishName" placeholder="Fish Name" value={this.props.data.fishName} />
                <input type="number" ref="fishPrice" placeholder="Fish Price" value={this.props.data.fishPrice} />
                <select ref="status" value={this.props.data.status} onChange={this.handleChange}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea type="text" ref="fishDescription" placeholder="Desc" value={this.props.data.fishDescription}></textarea>
                <input type="text" ref="imageUrl" placeholder="URL to Image" value={this.props.data.imageUrl} />
                <button onClick={this.removeFish}>Remove Fish</button>
            </div>
        )
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({value: e.target.value});
    }

    removeFish(){
        if (confirm("Are you sure you want to remove this fish?!")) {
            this.props.onRemoveClick(this.props.data.id);
        }
    }
}
