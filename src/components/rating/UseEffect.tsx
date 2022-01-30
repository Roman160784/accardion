import React, { useEffect, useMemo, useState } from 'react';

export const UseEffectX = () => {

    const [counter, setCounter] = useState(1)
    const [timer, setTimer] = useState(1)
    const  [hour, setHour] = useState ('')
    const [minutes, setMinutes] = useState ('')
    const  [seconds, setSeconds] = useState ('')




useEffect(() => {
    setTimeout(() => {
        document.title = counter.toString()
    }, 1000)
}, [counter])

// useEffect(() => {
//     setInterval(() => {
//         setTimer((state) => state + 1);
//     }, 1000)
// }, [])

let a = new Date()


useEffect(() => {
    setTimeout(() => {
        setHour(a.getHours().toString())
        setMinutes(a.getMinutes().toString())
        // setSeconds(a.getSeconds().toString())
    }, 1000)
})


    return (
        <div>
        <div>UseEffect</div>
       timer: {timer}
        <button onClick={() => setCounter(state => state + 1)}></button>
        counter {counter}
        <h1>{hour}</h1>
        <h1>{minutes}</h1>
        <h1>{seconds}</h1>
        </div>
    )
}


