import React from 'react';

class Events extends React.Component{
  constructor(){
    super();

    this.state = {
      data: 0
    };

    this.setNewNumber = this.setNewNumber.bind(this);
  }

  setNewNumber(){
    this.setState({data: this.state.data + 1});
  }

  render(){
    return (
      <div>
        <button onClick = {this.setNewNumber}>Increment</button>
        <Content myNumber = {this.state.data} />
      </div>

    )
  }
}

class Content extends React.Component{
  componentWillMount(){
    console.log('will mount');
  }
  componentDidMount(){
    console.log('did mount');
  }

  componentWillReceiveProps(newProps) {
      console.log('Component WILL RECIEVE PROPS!')
   }

   shouldComponentUpdate(newProps, newState) {
      return true;
   }

   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }

   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }

  render(){
    return(
      <h3>{this.props.myNumber}</h3>
    )
  }
}

export default Events;
