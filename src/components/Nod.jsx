import React, { useState } from "react";
import styles from './componentStyles.module.css'

function findCommonDivisors(numbers) {
    if (numbers.length === 0) return [];

    const getDivisors = (num) => {
        const divisors = [];

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                divisors.push(i);
                if (i !== num / i) {
                    divisors.push(num / i);
                }
            }
        }
        return divisors
    };

    let commonDivisors = getDivisors(numbers[0]);

    for (let i = 1; i < numbers.length; i++) {
        const divisors = getDivisors(numbers[i]);
        commonDivisors = commonDivisors.filter(divisor => divisors.includes(divisor));
    }

    return commonDivisors.sort((a, b) => a - b);;
}


function NumberCollector() {
    const [inputValue, setInputValue] = useState('');
    const [numbers, setNumbers] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const addNumbersToArray = () => {
        const numArray = inputValue
            .trim()                   
            .split(" ")               
            .map(num => parseInt(num, 10)) 
            .filter(num => !isNaN(num) && num > 0); 

        setNumbers(numArray); 
        setInputValue(''); 
    };

    return (
        <div className={styles.component}>
            <h2>2. Общие делители</h2>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Например: 1 2 3"
            />
            <button className="styles.button" onClick={addNumbersToArray}>Посчитать</button>

            <h4>Массив ваших чисел:</h4>
            <p>[{numbers.join(", ")}]</p> 
            <h4>Массив общих делителей:</h4>
            <p> [{findCommonDivisors(numbers).join(', ')}] </p> 
        </div>
    );
}

export default NumberCollector;
