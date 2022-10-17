import { useState } from "react";
import Card from "./components/card";
import data from "./helper/data"

function App() {
  const [count,setCount]=useState(0);

  function increment(){
    if (count<15){
      setCount(count+5);
      return;
    }
    setCount(0);

  }

  function decrement(){
    if (count>=5){
      setCount(count-5);
      return;
    }
  
  }

  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>Employees List</h1>
          <p>(Employees {count} to {count+5})</p>
        </div>
        <div className="card-container">
        
        {
          data.slice(count,count+5).map(person =>{
            return <Card {...person} key={person.id}/>
          }
            )
        }

        </div>
        <div className="buttons">

          <button onClick={decrement}>Previous</button>
          <button onClick={increment}>Next</button>
        </div>
      </div>
    </>
  );
}

export default App;
