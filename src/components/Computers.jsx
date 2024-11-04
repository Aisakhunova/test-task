import React, {useState} from "react";
import styles from './componentStyles.module.css'

function getComputerWord(num) {
    const lastTwoDigits = num % 100;
    const lastDigit = num  % 10;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        return "компьютеров";
    } else if (lastDigit === 1) {
        return "компьютер";
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        return "компьютера";
    } else {
        return "компьютеров";
    }
}

function Computers(){
    const [number, setNumber] = useState('')

    const handleNumberChange = (e) => {
        const value = e.target.value
        if(value === '' ||  !(isNaN(value))) {
            setNumber(value)
        }
    }

    const numberToCount = number === '' ? 0 : parseInt(number, 10)

    return(
        <div className={styles.component}>
            <h2>1. Компьютеры</h2>
            <input 
                type="text"
                value={number}
                onChange={handleNumberChange}
                placeholder="Введите количество компьюеторов"
            />
            <p>{number} {number === '' ? '' : getComputerWord(numberToCount)} </p>
        </div>
    )
}

export default Computers