import React from 'react';
import logo from './logo.svg';
import { Accardion } from './components/accordion/Accordion'
import { SelfControlledAccardion } from './components/accordion/SelfControlledAccardion'
import { Rating } from './components/rating/Rating'
import { UnControledRating } from './components/rating/UnControleedRating'
import OnOff  from './components/OnOff'
import './App.css';


function App() {
  return (
    <div className="App">
      <PageTitle title={"This is App component"} />
      <OnOff />
      
      <PageTitle title={"MY FRIENDS"} />
      <Rating value={5} />
      <Accardion titleValue={"Menu"} collapsed={false} />

      <Accardion titleValue={"Users"} collapsed={false} />
      <OnOff />
      <SelfControlledAccardion titleValue={"+++Menu+++"}/>
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
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
