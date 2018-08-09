import React,{Component} from 'react';
import PropTypes from 'prop-types';
import cssPerson from './Person.css'; //Scoping css to component import "CSS Module"
import withClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Aux';
import {AuthContext} from '../../../container/App';

class Person extends Component {
    constructor(props){
        super(props);
        console.log('[Person.js] inside constructor ',props);
        this.inputElement = React.createRef();
    }

    componentWillMount(){
        console.log('[Person.js] inside componentWillMount()');
    }

    componentDidMount(){
        console.log('[Person.js] inside componentDidMount()');
        if(this.props.position === 0){
            this.inputElement.current.focus();
        }
    }

    componentWillUnmount(){
        console.log('[Person.js] inside componentWillUnmount()');
    }

    focus(){
        this.inputElement.current.focus();
    }

    render (){
        return(
        <Aux>
            <AuthContext.Consumer>
                {auth => auth?<p>I'm Authenticated</p>:null}
            </AuthContext.Consumer>
            <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input type="text"
                ref={this.inputElement} 
                onChange={this.props.changed} 
                value={this.props.name}/>
        </Aux>
        )
    }
};

//install to validate type or property: npm install --save prop-types
Person.propTypes = {
    click: PropTypes.func,
    name:PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};


//export default Radium(person); removed to be used CSS Module
export default withClass(Person,cssPerson.Person);