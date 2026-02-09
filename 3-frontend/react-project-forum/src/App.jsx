// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Card from './Card.jsx';
import { comments } from './commentData.js';


function App() {
  // console.log(comments[0]);
  return comments.map((comment, i) => {
    return <Card key={'card_' + i} commentObject={comment}></Card>;
  });

}

export default App
