import React, { ChangeEvent, useState } from 'react';


type InputPripsType ={

}



export const Input = () => {
    const [value, setValue] = useState('')
    const [check, setCheck] = useState(true)
    const [select, setSelect] = useState <string | undefined>(undefined)

    const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {setValue(e.currentTarget.value)}
    const onCheckHandler = (e: ChangeEvent<HTMLInputElement>) => {setCheck(e.currentTarget.checked)}
    const selectHandler = (e: ChangeEvent<HTMLSelectElement>) => {setSelect(e.currentTarget.value)}

    return (
        <><input type="text" value={value} onChange={onchangeHandler} />
        <button onClick={()=> {setValue(value)}}>actual value - {value}</button>
        <input type="checkbox" checked={check} onChange={onCheckHandler} />
        <select value={select} onChange={selectHandler}>
            <option >none</option>
            <option value={"1"}>Minsk</option>
            <option value={"2"}>Moskow</option>
            <option value={"3"}>Kiev</option>
           
        </select>
        </>
    )
}