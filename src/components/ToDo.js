import React from 'react';

const ToDo = (props) => {
    return (
        <div className='toDo'>
            <span>
                {props.text}
                <button className="remove-todo" onClick={() => props.removeToDo(props.id)}>✖</button>
            </span>
            
        </div>
    );
}

export default ToDo;