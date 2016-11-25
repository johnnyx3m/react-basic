import React from 'react';
import {Link} from 'react-router';

class Routes extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default Routes;
