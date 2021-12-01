import React, { useState } from 'react';

type OnOffPropsType = {
    // on: boolean
}



function OnOff(props: OnOffPropsType) {

    let [on, setOn] = useState(false)

    const onStyle = {
        width: "70px",
        height: "50px",
        border: "1px solid black",
        display: 'inline-block',
        padding: "2px",
        backgroundColor: on? "green": "white"
        // backgroundColor: props.on && "green" правильное выпажение

    };

    const oFFStyle = {
        width: "70px",
        height: "50px",
        border: "1px solid black",
        display: 'inline-block',
        marginLeft: '10px',
        padding: "2px",
        backgroundColor: on? "white": "red"
    };

    const indicatorStyle = {
        width: "50px",
        height: "50px",
        borderRadius: "25px",
        border: "1px solid black",
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on? "green": "red"
    };

    return (
        <div>
            <div style={onStyle} onClick={()=>{setOn(true)}}>ON</div>
            <div style={oFFStyle} onClick={()=>{setOn(false)}}>OFF</div>
            <div style={indicatorStyle} onClick={()=>{}}></div>
        </div>
    )
}

export default OnOff;