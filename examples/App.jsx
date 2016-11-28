import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      header: "my header",
      data:[
        {
          "id": 1,
          "name": "John",
          "age": 23
        },
        {
          "id": 2,
          "name": "Ana",
          "age": 22
        },
        {
          "id": 3,
          "name": "Jax",
          "age": 26
        }
      ],
      statusData: []
    }

    this.setStateHandler = this.setStateHandler.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.findDOMHandler = this.findDOMHandler.bind(this);
  }

  setStateHandler(){
    var item = "setState...";
    var arr = this.state.statusData;
    arr.push(item);
    this.setState({statusData: arr});
  }

  findDOMHandler(){
    var myDiv = document.getElementById("myDiv");
    ReactDOM.findDOMNode(myDiv).style.color = "green";
  }

  forceUpdateHandler(){
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <div id = "myDiv">
          NODE
        </div>
        <button onClick = {this.setStateHandler}> Set State </button>
        <button onClick = {this.forceUpdateHandler}>Force Update</button>
        <button onClick = {this.findDOMHandler} >Find Node </button>
        <p>{this.state.statusData}</p>
        <p>{Math.random()}</p>
        <Header title= {this.state.header}/>
        <Header title= {this.props.title}/>
        <table>
          <tbody>
            {
            this.state.data.map((person, i) => <TableRow key = {i} datas = {person} />)
            }
          </tbody>
        </table>

        <h3>Array: {this.props.propArray}</h3>
        <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
        <h3>Func: {this.props.propFunc(3)}</h3>
        <h3>Number: {this.props.propNumber}</h3>
        <h3>String: {this.props.propString}</h3>
        <h3>Object: {this.props.propObject.objectName1}</h3>
        <h3>Object: {this.props.propObject.objectName2}</h3>
        <h3>Object: {this.props.propObject.objectName3}</h3>
      </div>
    );
  }
}


App.propTypes = {
  propArray: React.PropTypes.array.isRequired,
  propBool: React.PropTypes.bool.isRequired,
  propFunc: React.PropTypes.func,
  propNumber: React.PropTypes.number,
  propString: React.PropTypes.string,
  propObject: React.PropTypes.object
}

App.defaultProps = {
  title: "Catch Em",
  propArray: [1,2,3,4,5],
  propBool: true,
  propFunc: function(e){return e},
  propNumber: 1,
  propString: "String value...",

  propObject: {
    objectName1:"objectValue1",
    objectName2: "objectValue2",
    objectName3: "objectValue3"
  }
}

class Header extends React.Component{
  render() {
    return (
      <h1>{this.props.title}</h1>
    )
  }
}

class TableRow extends React.Component{
  render(){
    return (
      <tr>
        <td>{this.props.datas.id}</td>
        <td>{this.props.datas.name}</td>
        <td>{this.props.datas.age}</td>
      </tr>
    )
  }
}

export default App;
