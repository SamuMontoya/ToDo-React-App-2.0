import React from 'react';

const BarComponent = () => {
    const style = {
        display: "flex",
        width: "300px",
        justifyContent: "space-around",
        background: "tomato",
        padding: "10px",
        borderRadius: "40px"
    }

    return(
        <div className='bar-component' style={style}>
            <button>🔍</button>
            <p>ToDo's Bar</p>
            <button>➕</button>
        </div> 
    );
}

export { BarComponent };