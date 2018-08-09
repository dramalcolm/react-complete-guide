import React,{PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

    //Start Component Lifecycle
    constructor(props){
        super(props);
        console.log('[Persons.js] inside constructor ',props);
        this.lastPersonRef = React.createRef();
    }

    componentWillMount(){
        console.log('[Persons.js] inside componentWillMount()');
    }

    componentDidMount(){
        console.log('[Persons.js] inside componentDidMount()');
        this.lastPersonRef.current.focus();
    }

    componentWillReceiveProps(nextProps){
        console.log('[UPDATE Persons.js] inside componentWillReceiveProps()',nextProps);
    }

    /*
    shouldComponentUpdate(nextProps, nextState){
        console.log('[SHOULD UPDATE Persons.js] inside shouldComponentUpdate()',nextProps,nextState);
        //return false; //Stop re-rendering;
        return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.click !== this.props.click; 
        //return true;
    }
    */

    componentWillUpdate(nextProps){
        console.log('[WILL UPDATE Persons.js] inside componentWillUpdate()',nextProps);
    }

    componentDidUpdate(){
        console.log('[DID UPDATE Persons.js] inside componentDidUpdate()');
    }

    render(){

        console.log('[Persons.js] inside render()');

        return this.props.persons.map((person, index) => {
                return <Person 
                        click={() => this.props.click(index)}
                        name={person.name} 
                        age={person.age}
                        key={person.id}
                        position={index}
                        ref={this.lastPersonRef}
                        changed={(event)=>this.props.changed(event,person.id)}/>   
              })
    };
    //End Component Lifecycle
       
}
export default Persons;   
