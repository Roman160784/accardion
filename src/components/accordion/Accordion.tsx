import React from 'react';

type AccardionPropsType = {
  titleValue: string
  collapsed: boolean
}

type AccardionTitlePropsType = {
  title: string
}

export function Accardion(props: AccardionPropsType) {
  return (
    <div>
      <AccardionTitle title={props.titleValue} />
      {props.collapsed === true && <AccardionBody />}
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