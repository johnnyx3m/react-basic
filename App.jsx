import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addFish } from './actions'

import AddFish from './components/AddFish.jsx'
import FishList from './components/FishList.jsx'
import OrderList from './components/OrderList.jsx'
import Header from './components/Header.jsx'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      allFishes: [
        {
          id: 1,
          fishName: "Oysters",
          fishPrice: 23.12,
          fishDescription: "A soft plump oyster with a sweet salty flavor and a clean finish.",
          status: "Fresh",
          imageUrl: "http://kingofwallpapers.com/oyster/oyster-009.jpg"
        }
      ]
    }
  }

   render() {
      const { dispatch, visibleFishes } = this.props

      return (
         <div>

           <label htmlFor="fold">Fold</label>
           <input type="checkbox" id="fold" />

           <div id="main">
               <div className="catch-of-the-day">
                   <div className="menu">
                       <Header />
                       <FishList fishes = {visibleFishes} />
                   </div>

                   <OrderList />

                   <AddFish onAddClick = {data => {
                    dispatch(addFish(data))
                   }}/>
               </div>
           </div>

         </div>
      )
   }
}

function select(state) {
   return {
      visibleFishes: state.fishes
   }
}

export default connect(select)(App)
