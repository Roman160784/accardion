import React from 'react';

type OnOffPropsType = {
    on: boolean
}



function OnOff(props: OnOffPropsType) {

    const onStyle = {
        width: "70px",
        height: "50px",
        border: "1px solid black",
        display: 'inline-block',
        padding: "2px",
        backgroundColor: props.on? "green": "white"
        // backgroundColor: props.on && "green" правильное выпажение

    };

    const oFFStyle = {
        width: "70px",
        height: "50px",
        border: "1px solid black",
        display: 'inline-block',
        marginLeft: '10px',
        padding: "2px",
        backgroundColor: props.on? "whire": "red"
    };

    const indicatorStyle = {
        width: "50px",
        height: "50px",
        borderRadius: "25px",
        border: "1px solid black",
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on? "green": "red"
    };

    return (
        <div>
            <div style={onStyle}>ON</div>
            <div style={oFFStyle}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default OnOff;