import React from 'react';

const HeaderComponent = (props) => {
    const style = {
        container: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            fontFamily: "Chewy",
            color: "#0D253F",
            background: "#F9BE7C",
            borderRadius: "25px",
            paddingTop: "25px",
            position: "relative",
            top: "-25px",
            paddingBottom: "15px",
        },
        mainTitle: {
            fontSize: "100px",
            margin: "15px",
        },
        secondTitle: {
            display: "flex",
            flexWrap: "wrap",
            textAlign: "right",
            alignContent: "center",
            maxWidth: "100px",
        },
    }

    return(
        <div style={style.container} className='title-component'>
            <h1 style={style.mainTitle}>ToDo</h1>
            <h3 style={style.secondTitle}>Productivity App</h3>
            {props.children}
        </div> 
    );
}

export { HeaderComponent };