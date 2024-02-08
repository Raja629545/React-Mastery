import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  //let counter = 25

  const addValue = () =>{
    if(counter < 20){
    counter = counter + 1;
    setCounter(counter);}
    console.log("Value added", counter);
  }

  const removeValue = () => {
    if(counter > 0){
    setCounter(counter - 1);}
  }

  return (
    <>


    <h1>Learning chai aur react</h1>
    <h2>counter : {counter}</h2>

    <button
    onClick={addValue}
    >add balue {counter}</button>

    <br />
    <button
    onClick={removeValue}
    >remove value {counter}</button>
    </>
  )
}

export default App
