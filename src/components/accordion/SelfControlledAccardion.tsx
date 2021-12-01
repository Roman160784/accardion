import React, { useState } from 'react';

type SelfControlledAccardionPropsType = {
  titleValue: string
  // collapsed: boolean
}

type AccardionTitlePropsType = {
  title: string
  onClick: () => void
}

export function SelfControlledAccardion(props: SelfControlledAccardionPropsType) {

let[collapsed, setCollapsed] = useState(false)
  return (
    <div>
      <AccardionTitle title={props.titleValue} onClick={()=> {setCollapsed(!collapsed)} } /> 
      {!collapsed && <AccardionBody />}
      {/* {!props.collapsed && <AccardionBody />} */}
    </div>
  )
}


function AccardionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}
function AccardionTitle(props: AccardionTitlePropsType) {
  return (
    <h3 onClick={() => {props.onClick()}}>---{props.title}---</h3>
  )
}