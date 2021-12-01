import React, { useState } from 'react';

type UnControledRating = {
   

}



export function UnControledRating(props: UnControledRating) {

    let [value, setValue] = useState( 0 | 1 | 2 | 3 | 4 | 5)

    return (
        <div>
                <Star selected={value > 1} /> 
                <Star selected={value > 2} /> 
                <Star selected={value > 3} /> 
                <Star selected={value > 4} /> 
                <Star selected={value > 0} /> 
            </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    // return props.selected === true ? <span><b>Star </b></span> : <span>Star</span>  
    return <span>{props.selected? <b>Star </b> : "star"}</span>  
}
