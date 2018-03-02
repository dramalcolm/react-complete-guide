import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


//This is a container, because it contains some part of your applicartion state
class App extends Component {
  //Only work in component
  state = {
  	persons: [
		{name: 'Douglas', age: 28 }, //Array
		{name: 'Malcolm', age: 18 },
		{name: 'Alphanso', age: 21 },
  	], //Array
  	otherState: 'some other values'
  } //Javascript Object

  switchNameHandler = (newName) =>{
  	//DONT DO THIS this.state.person[0].name = 'Douglas Malcolm'
  	this.setState({persons: [
			{name: newName, age: 28 }, //Array
			{name: 'Malcolm', age: 18 },
			{name: 'Alphanso', age: 29 },
		]})
  }

  nameChangedHandler = (event) => {
	  this.setState({persons: [
			  {name: 'Douglas', age: 28 }, //Array
			  {name: event.target.value, age: 18 },
			  {name: 'Alphanso', age: 29 },
		  ]})
  }


  render() {

  	const style = {
  		backgroundColor: 'white',
  		font: 'inherit',
  		border: '1px solid blue',
  		padding: '8px',
  		cursor: 'pointer'
  	};
    return (
    //This is JSX
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <p>This this working</p>
		  <button style={style} onClick={() => this.switchNameHandler('Joyce')}>Switch Name</button>
        <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}/>
		  <Person
		  name={this.state.persons[1].name}
		  age={this.state.persons[1].age}
		  click={this.switchNameHandler.bind(this, 'Clayton')}
		  changed={this.nameChangedHandler}>My hobby: Drift</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

      </div>
    );
   //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi, I\'m a react app!!'));
  }
}

export default App;

