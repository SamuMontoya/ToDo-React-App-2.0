import React from 'react';

const TodoComponent = (props) => {
    return(
        <div className='todo-component'>
            <li>
                <span>✓</span>
                <p>{props.text}</p>
                <span>x</span>
            </li>
        </div> 
    );
}

export { TodoComponent };