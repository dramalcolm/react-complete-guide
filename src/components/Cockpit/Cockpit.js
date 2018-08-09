import React from 'react';
import cssClasses from './Cockpit.css';
import Aux from '../../hoc/Aux';

const Cockpit = (props) =>{
    let btnClass = '';
    if(props.showPerson){
        btnClass = cssClasses.Red;
    }
    //Setting ClassName Dynamically
    const assignedClasses = [];
    if(props.persons.length <= 2){
        assignedClasses.push(cssClasses.red);
    }
    if(props.persons.length <= 1){
        assignedClasses.push(cssClasses.bold);
    }

    return(
        //<div className={cssClasses.Cockpit}>
        <Aux>
            <h1>{props.pageTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is working</p>
            <button className={btnClass}
            onClick={props.clicked}>Toggle Person List</button>
            <button onClick={props.login}>Log In</button>
        </Aux>
        //</div>   
    );
}

export default Cockpit;