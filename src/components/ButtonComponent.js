import React from 'react';



const ButtonComponent = (props) => {
    const style = {
        borderRadius: "30px",
        padding: "0 10px",
        height: "40px",
        color: "#F3F3F3",
        fontSize: "20px",
        fontFamily: "Chewy",
        cursor: "pointer",
        border: "none",
        background: props.color
    }

    const onClickButton = () => {
        alert("Modal Opening")
    }
    return(
        <div className='button-component'>
            <button onClick={ onClickButton } style={style}>{props.text}</button>
        </div> 
    );
}

export { ButtonComponent };