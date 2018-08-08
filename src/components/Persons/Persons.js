import React,{Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {

    constructor(props){
        super(props);
        console.log('[Persons.js] inside constructor ',props);
    }

    componentWillMount(){
        console.log('[Persons.js] inside componentWillMount()');
    }

    componentDidMount(){
        console.log('[Persons.js] inside componentDidMount()');
    }

    render(){

        console.log('[Persons.js] inside render()');

        return this.props.persons.map((person, index) => {
                return <Person 
                        click={() => this.props.click(index)}
                        name={person.name} 
                        age={person.age}
                        key={person.id}
                        changed={(event)=>this.props.changed(event,person.id)}/>   
              })
            };
       
}
export default Persons;   
