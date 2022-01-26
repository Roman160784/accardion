import React, { useState } from 'react';
import logo from './logo.svg';
import { Accardion } from './components/accordion/Accordion'
import { SelfControlledAccardion } from './components/accordion/SelfControlledAccardion'
import { Rating, RatingValueType } from './components/rating/Rating'
import { UnControledRating } from './components/rating/UnControleedRating'
import OnOff from './components/OnOff'
import './App.css';
import { isPropertySignature } from 'typescript';
import { title } from 'process';
import {Input} from './components/Input'
import {Select} from './components/accordion/Select'



function App() {

  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  let [accardionColapsed, setAccardionColapsed] = useState<boolean>(true)

  const onClick = () => {
    alert(`${title} ${'hi'}`)
  }

  return (
    <div className="App">
      <PageTitle title={"This is App component"} />
      <OnOff />
      <Input/>
      <PageTitle title={"MY FRIENDS"} />
      <Accardion titleValue={"Menu"} collapsed={accardionColapsed} onChange={() => { setAccardionColapsed(!accardionColapsed) }} 
      items={[{title:'Dima', value: 1}, {title:'Valera', value: 2}, {title:'Art', value: 3}]} 
      onClick={onClick}
      />

      <OnOff />
      <SelfControlledAccardion titleValue={"+++Menu+++___------"} items={[]} onClickBody={() => {}}  />
      <Rating value={ratingValue} onClick={setRatingValue} />
      <OnOff />
      <UnControledRating />
      <Select value={title} onChange={() => {}} 
      items={[{title:'Dima', value: 1}, {title:'Valera', value: 2}, {title:'Art', value: 3}]}/>
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  return (
    <h1> {props.title}</h1>
  )
}

export default App;
function value(value: any) {
  throw new Error('Function not implemented.');
}

