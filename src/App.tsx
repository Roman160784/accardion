import React from 'react';
import logo from './logo.svg';
import { Accardion } from './components/accordion/Accordion'
import { Rating } from './components/rating/Rating'
import OnOff  from './components/OnOff'
import './App.css';


function App() {
  return (
    <div className="App">
      <PageTitle title={"This is App component"} />
      <OnOff on={false}/>
      <PageTitle title={"MY FRIENDS"} />
      <Rating value={5} />
      <Accardion titleValue={"Menu"} collapsed={true} />

      <Accardion titleValue={"Users"} collapsed={true} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
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
