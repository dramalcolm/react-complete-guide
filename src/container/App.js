import React, { PureComponent } from 'react';
import cssClasses from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/WithClass';

export const AuthContext = React.createContext(false);

//PureComponent should be used everywhere
class App extends PureComponent {

  constructor(props){
    super(props);
    console.log('[App.js] inside constructor ',props);
    this.state = {
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
      showPerson: false,
      toggleClicked: 0,
      authenticated: false
    }
  }

  //Start Component Lifecycle
  /*Not useful in React ^16.3
  componentWillMount(){
    console.log('[App.js] inside componentWillMount()');
  }
  */
  componentDidMount(){
    console.log('[App.js] inside componentDidMount()');
  }
  /*
  Not useful in React ^16.3

  shouldComponentUpdate(nextProps, nextState){
    console.log('[SHOULD UPDATE App.js] inside shouldComponentUpdate()',nextProps,nextState);
    //return false; //Stop re-rendering;
    return nextState.persons !== this.state.persons || nextState.showPerson !== this.state.showPerson; 
  }
  
  componentWillUpdate(nextProps){
      console.log('[WILL UPDATE App.js] inside componentWillUpdate()',nextProps);
  }
  */

  componentDidUpdate(){
      console.log('[DID UPDATE App.js] inside componentDidUpdate()');
  }

  static getDerivedStateFromProps(nextProps,prevState){
    console.log('[DERIVED STATE App.js] inside getDerivedStateFromProps()',
    nextProps,prevState);

    return prevState; //a valid state must be returned
  }
  
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[SNAPSHOT App.js] inside getSnapshotBeforeUpdate()');
    return null;

  }

  render() {
    console.log('[App.js] inside render()');
    
    let persons = null;
    if(this.state.showPerson){
      persons = (
           <Persons 
              persons={this.state.persons} 
              click={this.deletePersonHandler} 
              changed={this.nameChangedHandler}/>
      );
    }
    return (
      <Aux>
        <button onClick={()=>this.setState({showPerson:true})}>Show Persons</button>
        <Cockpit
          pageTitle={this.props.title} 
          clicked={this.togglePersonsHandler} 
          persons={this.state.persons} 
          showPerson={this.state.showPerson}
          login={this.loingHandler}/>
          <AuthContext.Provider value={this.state.authenticated}>
            {persons}
          </AuthContext.Provider>
      </Aux>
    );
  }
  //End Component Lifecycle

  loingHandler=()=>{
    this.setState({authenticated:true});
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
    this.setState((prevState,props)=>{
      return{
      showPerson: !isShow,
      toggleClicked:prevState.toggleClicked + 1 //relying on the previous state
      }
    });
  }

  deletePersonHandler = (personIndex) =>{
    const personList = [...this.state.persons];//or const personList = this.state.persons.slice();
    personList.splice(personIndex,1);
    this.setState({persons: personList});
  }

}

export default withClass(App,cssClasses.App);