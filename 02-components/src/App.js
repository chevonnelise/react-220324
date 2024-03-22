import Alert from "./Alert"
import Shout from "./Shout"

function displayHeader() {
  return (<h1>About Me</h1>);
}

function sayHello() {
  return "Hello Everybody"
}

// What is a component in React
// 1. Is a function
// 2. First alphabet of the function is upper case
// 3. Return JSX
//

function SumOfTwo(props) {
  console.log(props.msg);
  return <div style={{
    backgroundColor:props.bgcolor,
    padding:"20px",
    marginTop: "10px",
    marginBottom: "10px",
    color:"brown",
  }}>
    {props.number1} + {props.number2} = {props.number1 + props.number2} 
  </div>
}


function App() {
  return (
    <>
    <h1>Hello World</h1>
    {displayHeader()}
    {sayHello()}
    <Alert msg="Be careful of wet floor" bgcolor="lavender"/>
    <Alert msg="Be careful of wild monkeys" bgcolor="pink"/>
    <Shout msg="Be careful of seagulls" bgcolor="lightblue"/>
    <SumOfTwo number1={1} number2={5} bgcolor="lightyellow"/>
    </>
  );
}

export default App;
