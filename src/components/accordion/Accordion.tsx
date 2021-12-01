import React from 'react';

type AccardionPropsType = {
  titleValue: string
  collapsed: boolean
  onChange: () => void
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
    <h3 onClick={props.onChange}>---{props.title}---</h3>
  )
}