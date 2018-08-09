import React,{Component} from 'react';
import cssPerson from './Person.css'; //Scoping css to component import "CSS Module"
import withClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Aux';

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
        <Aux>
        <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
        </Aux>
        )
    }
};


//export default Radium(person); removed to be used CSS Module
export default withClass(Person,cssPerson.Person);