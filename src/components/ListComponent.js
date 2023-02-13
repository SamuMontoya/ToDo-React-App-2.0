import React from 'react';
import { ButtonComponent } from './ButtonComponent';

const style = {
    container: {
        background: "#309398",
        padding: "25px",
        marginTop: "20px",
        borderRadius: "25px 25px 0 0",
        minHeight: "286px"
    },
    headList: {
        textAlign: "center",
        fontFamily: "Chewy",
        color: "#F3F3F3",
        fontSize: "30px",
        display: "flex",
        justifyContent: "space-around",
    },    
}

const ListComponent = (props) => {
    return(
        <div style={style.container} className='list-component'>
            <div style={style.headList}>
                <h2 style={style.title}>List ToDo's</h2>
                <ButtonComponent color="#e46471" text="Create" />
            </div>
            <ul>
                {props.children}
            </ul>
        </div> 
    );
}

export { ListComponent };