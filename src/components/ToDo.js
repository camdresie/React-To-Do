import React from 'react';

const ToDo = (props) => {
    return (
        <div className='toDo'>
            <p>{props.text}</p>
        </div>
    );
}

export default ToDo;