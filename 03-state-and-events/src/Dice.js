import { useState } from 'react'


export default function Dice() {

    const [count, setCount] = useState(0);
    const num = parseInt(Math.random()*6) + 1;

    const random = () => {
        // change the current value in the box
        // to be its current value + 1
        setCount(num);
    }

    const oneOrSix = () => {
        if (count === 1) {
            return "red"
        } else if (count === 6) {
            return "green";
        } 
        return "black";
    }

    return (

        <div style={{
            "padding":"20px",
            "height":"150px",
            "width": "50px",
            "color": oneOrSix()
        }} onClick={random}>
            {count}
            <button className="button" onClick={random}>Random</button>
        </div>

    );
}
