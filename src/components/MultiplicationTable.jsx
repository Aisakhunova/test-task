import React, { useState } from "react";
import styles from './componentStyles.module.css'

function MultiplicationTable() {
    const [number, setNumber] = useState("");
    const [table, setTable] = useState([]);

    const handleChange = (e) => {
        setNumber(e.target.value);
    };

    const generateTable = () => {
        const num = parseInt(number, 10);
        if (!isNaN(num) && num > 0) {
            const newTable = [];
            for (let i = 1; i <= num; i++) {
                const row = [];
                for (let j = 1; j <= num; j++) {
                    row.push(i * j);
                }
                newTable.push(row);
            }
            setTable(newTable);
        } else {
            setTable([]);
        }
    };

    return (
        <div className={styles.component}>
            <h2>4. Таблица умножения</h2>
            <input
                type="number"
                value={number}
                onChange={handleChange}
                placeholder="Введите число"
            />
            <button onClick={generateTable}>Рассчитать таблицу</button>
            <div style={{ marginTop: "20px" }}>
                {table.length > 0 && (
                    <table border="1" cellPadding="10">
                        <tbody>
                            {table.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {row.map((cell, cellIndex) => (
                                        <td key={cellIndex}>{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default MultiplicationTable;
