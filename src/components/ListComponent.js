import React from 'react';

const ListComponent = (props) => {
    return(
        <div className='list-component'>
            <h2>List ToDo's</h2>
            <ul>
                {props.children}
            </ul>
        </div> 
    );
}

export { ListComponent };