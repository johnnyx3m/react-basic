import React, { Component, PropTypes } from 'react';
import FishEditList from './FishEditList.jsx';
import AddFish from './AddFish.jsx';
import { addFish } from '../../actions';

export default class Inventory extends Component {
    render() {
        return (
          <div>
              <h2>Inventory</h2>
              <button onClick={this.props.onLogoutClick}>Log Out!</button>

              <FishEditList dispatch={this.props.dispatch} fishes={this.props.availableFishes} />

              <AddFish onAddClick={data => {
                  this.props.dispatch(addFish(data))
              }}/>
          </div>
        )
    }
}
