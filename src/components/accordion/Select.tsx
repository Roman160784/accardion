import React, { useState } from 'react';
import styles from '../accordion/Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {

    const [active, setActive] = useState(false)
    const [value, setValue] = useState("")

    const selecyedIteam = props.items.find(i => i.value === props.value)
    const toggleIteams = () => setActive(!active)
    const iteamClicked = (title: any) => {props.onChange(title);
        toggleIteams()
    }
    

    return (
        <div className={styles.select}>
    
            <span  className={styles.main} onClick={toggleIteams}>{selecyedIteam && selecyedIteam.title}</span>
            {active && 
            <div className={styles.items}>
            {props.items.map(i => <div className={styles.item + '' + (selecyedIteam === i ? styles.selected : "")} key={i.value}
            onClick={() => {iteamClicked(i.title)}}
            >{i.title}</div>)}
            </div>
            }
        </div>
    )
}


