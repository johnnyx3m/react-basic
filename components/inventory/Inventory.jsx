import React, { Component, PropTypes } from 'react'
import FishEditList from './FishEditList.jsx'
import AddFish from './AddFish.jsx'
import { addFish } from '../../actions'

export default class Header extends Component {
    render() {
        return (
          <div>
              <h2>Inventory</h2>
              <button onClick={this.props.onLogoutClick}>Log Out!</button>
              <FishEditList fishes={this.props.visibleFishes} />
              <AddFish onAddClick = {data => {
                  dispatch(addFish(data))
              }}/>
          </div>
        )
    }
}
