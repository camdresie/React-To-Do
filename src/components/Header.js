import React from 'react';

const Header = (props) => {
    return (
        <div>
            <h1>What Do You Need To Do Today?</h1>
            <p>Number of To-dos: {props.numToDos}</p>
        </div>
    );
    
}

export default Header;