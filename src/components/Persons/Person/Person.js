import React,{Component} from 'react';
import cssPerson from './Person.css'; //Scoping css to component import "CSS Module"

class Person extends Component {
    render (){
        return(
        <div className={cssPerson.Person} >
        <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
        </div>
        )
    }
};


//export default Radium(person); removed to be used CSS Module
export default Person;