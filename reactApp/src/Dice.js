import { useState } from "react";


const DiceComponent = () => {
    let [attempts, setAttempts] = useState(0);

    let [diceOne, setDiceOne] = useState(null);
    let [diceTwo, setDiceTwo] = useState(null);

    const rollDice = () => {
        let diceNumber = [1, 2, 3, 4, 5, 6, 7];
        let numberOne = Math.random().toFixed(1) * 10;
        let numberTwo = Math.random().toFixed(1) * 10;

        if (numberOne > 6) {
            numberOne = numberOne - Math.floor(Math.random().toFixed(1));
        } else if (numberTwo > 6) {
            numberTwo = numberTwo - Math.floor(Math.random().toFixed(1));
        }
        console.log("numberOne,numberTwo",numberOne,numberTwo)
        if (numberOne < 0) {
            numberOne = Math.floor(Math.random().toFixed(1));
        } else if (numberTwo < 0) {
            numberTwo = Math.floor(Math.random().toFixed(1));
        }

        if (numberOne + numberTwo == 7) {
            alert("Lucky 7 Winner");
        }
        setDiceOne(numberOne);
        setDiceTwo(numberTwo);
    }

    return (
        <>
            <button onClick={rollDice}>Play</button>
            <div>
                Dice Number One: {diceOne}
            </div>
            <div>
                Dice Number Two: {diceTwo}
            </div>
            <div>
                The Sum is : {diceOne + diceTwo}
            </div>
        </>
    )
}

export default DiceComponent;