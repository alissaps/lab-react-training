import { useState } from 'react';

import diceEmpty from './assets/dice-empty.png'
import dice1 from './assets/dice1.png'
import dice2 from './assets/dice2.png'
import dice3 from './assets/dice3.png'
import dice4 from './assets/dice4.png'
import dice5 from './assets/dice5.png'
import dice6 from './assets/dice6.png'

const diceArr = [dice1, dice2, dice3, dice4, dice5, dice6];

function Dice() {
    let [dice, setDice] = useState(diceArr[0]);

    function handleDice() {
        let randomNumber = Math.floor(Math.random() * (6 - 1) + 1);

        setDice(diceEmpty);

        setTimeout(() => {
            setDice(diceArr[randomNumber]);
        }, 1000);
    }
 
    return (
        <img onClick={handleDice} src={dice} alt="..." style={{width: "150px"}}/>
    )
}

export default Dice;