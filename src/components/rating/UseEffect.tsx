import React, { useEffect, useMemo, useState } from 'react';

export const UseEffectX = () => {

    const [counter, setCounter] = useState(1)
    const [timer, setTimer] = useState(1)
    const [clock, setClock] = useState(new Date())

    // const  [hour, setHour] = useState (0)
    // const [minutes, setMinutes] = useState (0)
    // const  [seconds, setSeconds] = useState (0)




useEffect(() => {
    setTimeout(() => {
        document.title = counter.toString()
    }, 1000)
}, [counter])


const twoDigitalString = (num: number) => num < 10 ? "0" + num : num
    
// const getSeconds = twoDigitalString(clock.getSeconds())
// const getMinutes = twoDigitalString(clock.getMinutes())
// const getHours = twoDigitalString(clock.getHours())


// const getMinutes = clock.getMinutes() < 10
// ? "0" + clock.getMinutes()
// : clock.getMinutes()

// useEffect(() => {
//     setInterval(() => {
//         setTimer((state) => state + 1);
//     }, 1000)
// }, [])

// let a = new Date()

useEffect(() => {
const intervalID = setInterval(() => {
        setClock(new Date())
        // setHour(a.getHours())
        // setMinutes(a.getMinutes())
        // setSeconds(a.getSeconds())
    }, 1000);
    return () => {
        clearInterval(intervalID)
    }
},[] )

const increase = () => {setCounter(counter + 1)}
    

    return (
        <div>
        <div>UseEffect</div>
       timer: {timer}
        <button onClick={increase}></button>
        counter {counter}
        <div>
            <span>{twoDigitalString(clock.getHours())}
            :</span><span>{twoDigitalString(clock.getMinutes())}
            :</span><span>{twoDigitalString(clock.getSeconds())}</span>
        {/* <span>{hour}</span>
        :<span>{minutes}</span> */}
        {/* :<span>{seconds}</span> */}
        </div>
        </div>
    )
}


