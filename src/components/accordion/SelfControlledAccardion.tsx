import React, { useState } from 'react';

type SelfControlledAccardionPropsType = {
  titleValue: string
  // collapsed: boolean
}

type AccardionTitlePropsType = {
  title: string
}

export function SelfControlledAccardion(props: SelfControlledAccardionPropsType) {

let[collapsed, setCollapsed] = useState(false)
  return (
    <div>
      <AccardionTitle title={props.titleValue} /> 
      <button onClick={()=>{setCollapsed(!collapsed)}}>TOGGlE</button> 
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
    <h3>---{props.title}---</h3>
  )
}