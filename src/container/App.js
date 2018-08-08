import React, { Component } from 'react';
import cssClasses from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id: 'cgdg',name: 'Douglas', age:28}, 
      {id: 'gfjjt24',name: 'Malcolm', age:19},
      {id: 'ddg4422',name: 'Alphanso', age: 17},
    ],
    usernames: [
      {name: 'Douglas'}, 
      {name: 'Malcolm'},
      {name: 'Alphanso'},
    ],
    showPerson: false
  }

  nameChangedHandler = (event,id)=>{
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });
    
    const person = {...this.state.persons[personIndex]}; //Copy as Object before changing
    person.name = event.target.value;

    const updatedpersons = [...this.state.persons];
    updatedpersons[personIndex] = person; //Adding update object to array

    this.setState({persons: updatedpersons});
  }

  userInputHandler = (event) => {
    this.setState({usernames:[
      {name: event.target.value}, 
      {name: event.target.value},
      {name: event.target.value},
    ]});
  }

  togglePersonsHandler = () => {
    const isShow = this.state.showPerson;
    this.setState({showPerson: !isShow});
  }

  deletePersonHandler = (personIndex) =>{
    const personList = [...this.state.persons];//or const personList = this.state.persons.slice();
    personList.splice(personIndex,1);
    this.setState({persons: personList});
  }


  render() {
    let persons = null;
    if(this.state.showPerson){
      persons = (
           <Persons 
              persons={this.state.persons} 
              click={this.deletePersonHandler} 
              changed={this.nameChangedHandler} />
      );
    }
    return (
      <div className={cssClasses.App}>
        <Cockpit 
          clicked={this.togglePersonsHandler} 
          persons={this.state.persons} 
          showPerson={this.state.showPerson}/>
        {persons}
      </div>
    );
  }
}

export default App;