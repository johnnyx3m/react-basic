import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component{
  render(){
    return(
      <div>
        {this.props.children}
      </div>

    )
  }
}

export default Home;
