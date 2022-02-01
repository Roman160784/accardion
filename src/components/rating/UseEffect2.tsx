import React, { useEffect, useMemo, useState, KeyboardEvent } from 'react';

export const UseEffectX2 = () => {

    const [text, setText] = useState('')

    // useEffect(() => {

    //     const handler = (e: KeyboardEvent) => {
    //         console.log(e.key);
    //         setText(text + e.key)
    //     }
        // window.document.addEventListener('keypress', handler)
        // return window.removeEventListener('keypress', handler)
    // }, [])
 

    return (
        <div>
        <div>UseEffect2</div>
        <div>{text}</div>
        </div>
        
    )
}


