import React, { useState } from 'react';

type SelfControlledAccardionPropsType = {
  titleValue: string
  items: ItemType[]
  onClickBody: (value: any) => void
  // collapsed: boolean
}

type AccardionTitlePropsType = {
  title: string
  onClick: () => void
}

type ItemType ={
  title: string
  value: any
  }

export function SelfControlledAccardion(props: SelfControlledAccardionPropsType) {

let[collapsed, setCollapsed] = useState(false)
  return (
    <div>
      <AccardionTitle title={props.titleValue} onClick={()=> {setCollapsed(!collapsed)} } /> 
      {!collapsed && <AccardionBody items={[{title: "Roma", value: 1},{title: "Egor", value: 2},]} onClickBody={props.onClickBody}/>}
      {/* {!props.collapsed && <AccardionBody />} */}
    </div>
  )
}

type AccardionBodyPropsType ={
  items: ItemType[]
  onClickBody: (value: any) => void
}

function AccardionBody(props: AccardionBodyPropsType) {
  return (
    <ul>
      {props.items.map((it, index) => 
        <li onClick={() => {props.onClickBody(it.value)}} key={index}>{it.title}</li>
        )}
    </ul>
  )
}


function AccardionTitle(props: AccardionTitlePropsType) {
  return (
    <h3 onClick={() => {props.onClick()}}>---{props.title}---</h3>
  )
}