import React, { useMemo, useState } from 'react';



let generateData = () => {
    console.log("g");
    
    return 777777;
}

export const UseStateX = () => {
    console.log("e");
    

    // const enitValue = useMemo(generateData, [])
    const [count, setCount] = useState(generateData)

    // const changer = (state: number) => {
        
    //     return state +1
    // }


    return (
        <>
            {/* <button onClick={()=> setCount(changer)}>+</button> */}
            <button onClick={()=> setCount(state => state + 1)}>+</button>
            {count}
        </>
    )
}


