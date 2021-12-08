import React from 'react';

type IteamPropsType = {
title: string
value: any
}

type AccardionPropsType = {
  titleValue: string
  collapsed: boolean
  onChange: () => void
  items: IteamPropsType[]
  onClick : (value: any) => void
}

type AccardionTitlePropsType = {
  title: string
  onChange: () => void

}

export function Accardion(props: AccardionPropsType) {
  return (
    <div>
      <AccardionTitle title={props.titleValue}
        onChange={props.onChange}
      />
      {props.collapsed === true && <AccardionBody items={props.items} onClick={props.onClick} />}
      {/* {!props.collapsed && <AccardionBody />} */}
    </div>
  )
}

type AccardionBodyPropsType = {
  items: IteamPropsType[]
  onClick : (value: any) => void
}

function AccardionBody(props: AccardionBodyPropsType) {
  return (
    <ul>
      {
        props.items.map((item, index) => <li onClick = {() => {props.onClick(item.value)}} key={index}>{item.title}</li>)    
      }

    </ul>
  )
}
function AccardionTitle(props: AccardionTitlePropsType) {
  return (
    <h3 onClick={props.onChange}>---{props.title}---</h3>
  )
}