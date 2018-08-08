import React, { Component } from 'react';
import cssClasses from './App.css';
import Person from './Person/Person';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
//import UserOutput from './User/UserOutput';
//import UserInput from './User/UserInput';
//import Radium,{StyleRoot} from 'radium'; //Ability to use psuedo selectors :

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

/* removed
  switchNameHandler = (newName) => {
    //console.log('Clicked');
    this.setState({persons:[
      {name: newName, age:31}, 
      {name: 'Malcolm', age:36},
      {name: 'Alphanso', age: 44},
    ]})
  }
*/
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
    //const persons = this.state.persons;
    const personList = [...this.state.persons];//or const personList = this.state.persons.slice();
    personList.splice(personIndex,1);
    this.setState({persons: personList});
  }


  render() {

    //console.log(cssClasses);
    /* removed to be used CSS Module
    const style = {
      backgroundColor: 'blue',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor: 'lightblue',
        color: 'black'
      }
    };
    */

    let persons = null;
    let btnClass = '';

    if(this.state.showPerson){
      persons = (
        <div > 
          {this.state.persons.map((person, index) => {
            return <Person 
                        click={() => this.deletePersonHandler(index)}
                        name={person.name} 
                        age={person.age}
                        key={person.id}
                        changed={(event)=>this.nameChangedHandler(event,person.id)}/>
                    
          })}  
        </div>
      );

      btnClass = cssClasses.Red;
      //style.backgroundColor = 'red'; removed to be used CSS Module
      /*style[':hover'] = { removed to be used CSS Module
        backgroundColor: 'salmon',
        color: 'black'
      }*/
    }

    //Setting ClassName Dynamically
    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push(cssClasses.red);
    }
    if(this.state.persons.length <= 1){
      classes.push(cssClasses.bold);
    }

    return (
      //<StyleRoot> {/*For media queries*/} removed to be used CSS Module
      <div className={cssClasses.App}>

       <h1>Hi, I am learning ReactJS</h1>
       <p className={classes.join(' ')}>This is working</p>
       <button className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Person List</button>
        {persons}

       {/*<UserInput changed={this.userInputHandler} value={this.state.usernames[0].name}/>
        <UserOutput userName={this.state.usernames[0].name} />
        <UserOutput userName={this.state.usernames[1].name} />
        <UserOutput userName={this.state.usernames[2].name} /> */}
      </div>
     // </StyleRoot> removed to be used CSS Module
    );
  }
}

//export default Radium(App); removed to be used CSS Module
export default App;