// useState is a "React hook"
// A hook allows us to add a new functionality to a React component
// The `useState` allows us to add a new state variable to a React component
import "./style.css"
import NumberBox from "./NumberBox";
import Alertbox from "./Alertbox";
import Dice from "./Dice";
import ClickCounter from "./ClickCounter";

import {useState} from 'react'


export default function App() {

  // add a new state variable to the App
  // the first argument in the useState function call is of the default variable
  const [number, setNumber] = useState(0);

  // alternatively: 
  // const numberState = useState(0);
  // const number = numberState[0];
  // const setNumber = numberSatte[1];

  return (
    <>
    <h1>State Examples</h1>
    {number}
    <div>
      <NumberBox/>
      <Alertbox defaultMessage="beware"/>
      <Dice/>
    </div>
    </>
  );
}

