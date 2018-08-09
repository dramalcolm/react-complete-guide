import React,{Component} from 'react';
import cssPerson from './Person.css'; //Scoping css to component import "CSS Module"
import WithClass from '../../../hoc/WithClass';

class Person extends Component {
    constructor(props){
        super(props);
        console.log('[Person.js] inside constructor ',props);
    }

    componentWillMount(){
        console.log('[Person.js] inside componentWillMount()');
    }

    componentDidMount(){
        console.log('[Person.js] inside componentDidMount()');
    }

    componentWillUnmount(){
        console.log('[Person.js] inside componentWillUnmount()');
    }

    render (){
        return(
        <WithClass class={cssPerson.Person} >
        <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
        </WithClass>
        )
    }
};


//export default Radium(person); removed to be used CSS Module
export default Person;