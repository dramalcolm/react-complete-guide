import React from 'react';

const userInput = (props) => {
    const style = {
        border: '2px solid red',
        height: '20px'
    };

    return  <input type="text" onChange={props.changed} value={props.value} style={style}/>
};

export default userInput;