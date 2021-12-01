import React, { useState } from 'react';
import logo from './logo.svg';
import { Accardion } from './components/accordion/Accordion'
import { SelfControlledAccardion } from './components/accordion/SelfControlledAccardion'
import { Rating, RatingValueType } from './components/rating/Rating'
import { UnControledRating } from './components/rating/UnControleedRating'
import OnOff from './components/OnOff'
import './App.css';



function App() {

  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  let [accardionColapsed, setAccardionColapsed] = useState<boolean>(true)

  return (
    <div className="App">
      <PageTitle title={"This is App component"} />
      <OnOff />

      <PageTitle title={"MY FRIENDS"} />
      <Accardion titleValue={"Menu"} collapsed={accardionColapsed} onChange={() => { setAccardionColapsed(!accardionColapsed) }} />

      <OnOff />
      <SelfControlledAccardion titleValue={"+++Menu+++"} />
      <Rating value={ratingValue} onClick={setRatingValue} />
      <OnOff />
      <UnControledRating />
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
