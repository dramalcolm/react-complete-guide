import React from 'react';

const withClass =(props)=>{

    return(
    <div className={props.class}>
        {props.children}
    </div>
    );
}

export default withClass;