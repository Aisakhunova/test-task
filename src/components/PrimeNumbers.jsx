import React, { useState } from "react";
import styles from './componentStyles.module.css'

function getPrimesInRange(min, max) {
    const primes = [];

    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }

    for (let i = min; i <= max; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}

function PrimeNumbers() {
    const [min, setMin] = useState("");
    const [max, setMax] = useState("");
    const [primes, setPrimes] = useState([]);

    const handleCalculatePrimes = () => {
        const minNum = parseInt(min, 10);
        const maxNum = parseInt(max, 10);

        if (!isNaN(minNum) && !isNaN(maxNum) && minNum <= maxNum) {
            setPrimes(getPrimesInRange(minNum, maxNum));
        } else {
            setPrimes([]); 
        }
    };

    return (
        <div className={styles.component}>
            <h2>3. Простые числа</h2>
            <div>
                <label>
                    Минимальное значение:
                    <input
                        type="number"
                        value={min}
                        onChange={(e) => setMin(e.target.value)}
                    />
                </label>
            </div>
            <br/>
            <div>
                <label>
                    Максимальное значение:
                    <input
                        type="number"
                        value={max}
                        onChange={(e) => setMax(e.target.value)}
                    />
                </label>
            </div>
            <br/>
            <button onClick={handleCalculatePrimes}>Найти простые числа</button>
            <div>
                {primes.length > 0 ? (
                    <div>
                        <p>Простые числа в диапазоне от {min} до {max}:</p>
                        <p>[{primes.join(", ")}]</p>
                    </div>
                ) : (
                    <p className={styles.redText}>Введите корректный диапазон чисел.</p>
                )}
            </div>
        </div>
    );
}

export default PrimeNumbers;
