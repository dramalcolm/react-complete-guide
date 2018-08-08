import React from 'react';
import cssPerson from './Person.css'; //Scoping css to component import "CSS Module"
//import Radium from 'radium'; removed to be used CSS Module

const person = (props) => {
    /* removed to be used CSS Module
    const style={
        '@media (min-width: 500px;)':{
            width: '450px'
        }
    };
    
   const rnd = Math.random(); custom error generator
   if(rnd > 0.7){
       throw new Error('Something went wrong!');
   }
    */
    return (
        <div className={cssPerson.Person} >
        <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};


//export default Radium(person); removed to be used CSS Module
export default person;