import React from 'react'
import Header from './Components/Header.jsx'
import Card from './Components/Card.jsx'
import Data from './Data.js'


function App() {
  const cards = Data.map((item) =>{
    return(
        <Card
        key={item.id}
        item = {item}
        
        />
    )
  })
  return (
    <div className="App">
      <Header/>
      {cards}
    </div>
  );
}

export default App;
