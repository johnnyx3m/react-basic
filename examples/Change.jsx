import React from 'react';
import ReactDOM from 'react-dom';

class Change extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      data: "initial data..."
    }

    this.updateState = this.updateState.bind(this);
    this.updateStateFromButton = this.updateStateFromButton.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }
  updateState(e){
    this.setState({data: e.target.value})
  }
  updateStateFromButton(){
    this.setState({data: 'updated from child...'})
  }

  clearInput(){
    this.setState({data: ''});
    ReactDOM.findDOMNode(this.refs.textbox).focus();
  }

  render(){
    return (
      <div>
        <input type = "text" value = {this.state.data} onChange = {this.updateState}
            ref = "textbox"/>
        <h2>{this.state.data}</h2>

        <Content textChange = {this.updateState}
                buttonClick = {this.updateStateFromButton}
                clear = {this.clearInput}
                data = {this.state.data}/>

      </div>
    )
  }
}

class Content extends React.Component{
  render(){
    return (
      <div>
        <input type = "text" value = {this.props.data} onChange = {this.props.textChange} />
        <h3>{this.props.data}</h3>
        <button onClick = {this.props.buttonClick}>Update</button>
        <button onClick = {this.props.clear}>Clear</button>

      </div>
    )
  }
}


export default Change;
