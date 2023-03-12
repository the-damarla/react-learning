import React, { useState } from 'react';

 export function Calculator(props) {
    let operand = '';
    let [topValue, operateValue] = useState('');
    let [displayValue, getValue] = useState('');
    let inputValue = 0;

    function toCompletePreviousOperation(resultToBeProcessed, value, presentValue) {
        if (resultToBeProcessed.includes('-') || resultToBeProcessed.includes('*') ||
        resultToBeProcessed.includes('%') || resultToBeProcessed.includes('+')) {
            getResult(resultToBeProcessed, presentValue);
            getValue(value);
            return true;
        }
        return false;
    }

    function addValues(resultToBeProcessed, value, presentValue) {
        if (toCompletePreviousOperation(resultToBeProcessed, value, presentValue)) return;
        operand = value;
        displayValue = displayValue ? displayValue.replace('+', '') : '';
        inputValue = parseInt(displayValue, 10);
        if (!isNaN(inputValue)) {
            topValue = inputValue;
            topValue = presentValue ? (parseInt(presentValue, 10) + topValue) : topValue;
            operateValue(topValue);
        }
        getValue(value);
    }

    function subtractValues(resultToBeProcessed, value, presentValue) {
        if (toCompletePreviousOperation(resultToBeProcessed, value, presentValue)) return;
        operand = value;
        displayValue = displayValue ? displayValue.replace('-', '') : '';
        inputValue = parseInt(displayValue, 10);
        if (!isNaN(inputValue)) {
            topValue = inputValue;
            topValue = presentValue ? (parseInt(presentValue, 10) - topValue) : topValue;
            operateValue(topValue);
        }
        getValue(value);
    }

    function multiplyValues(resultToBeProcessed, value, presentValue) {
        if (toCompletePreviousOperation(resultToBeProcessed, value, presentValue)) return;
        presentValue = presentValue ? presentValue : 1;
        operand = value;
        displayValue = displayValue ? displayValue.replace('*','') : '';
        inputValue = parseInt(displayValue, 10);
        if (!isNaN(inputValue)) {
            topValue = inputValue;
            topValue = presentValue ? presentValue * parseInt(topValue, 10) : topValue;
            operateValue(topValue);
        }
        getValue(value);
    }

    function divideValues(resultToBeProcessed, value, presentValue) {
        if (toCompletePreviousOperation(resultToBeProcessed, value, presentValue)) return;
        operand = value;
        displayValue = displayValue ? displayValue.replace('%','') : '';
        inputValue = parseInt(displayValue, 10);
        if (!isNaN(inputValue)) {
            topValue = inputValue;
            topValue = presentValue ? (topValue = presentValue / parseInt(topValue, 10)) : topValue;
            operateValue(topValue);
        }
        getValue(value);
    }

    function getResult(resultToBeProcessed, presentValue) {
        if (resultToBeProcessed.includes('+')) {
            addValues('', '+', presentValue);
        } else if (resultToBeProcessed.includes('-')) {
            subtractValues('', '-', presentValue);
        } else if (resultToBeProcessed.includes('*')) {
            multiplyValues('', '*', presentValue);
        } else {
            divideValues('', '%', presentValue);
        }
    }

    function resetToDefault() {
        operateValue('');
        getValue('');
    }

    function deleteLastChar(presentValue) {
        presentValue = presentValue ? presentValue.slice(0, -1) : '';
        getValue(presentValue);
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '4rem'}}>
            <div>
                <span style={{display: 'flex'}}>{topValue}</span>
                <span style={{display: 'flex'}}>{operand} {displayValue}</span>
            </div>
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td colSpan='3'><button style={{minWidth: '-webkit-fill-available'}} onClick={() => resetToDefault()}>AC</button></td>
                        <td><button onClick={() => deleteLastChar(displayValue)}>DEL</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => getValue(displayValue + '1')}>1</button></td>
                        <td><button onClick={() => getValue(displayValue + '2')}>2</button></td>
                        <td><button onClick={() => getValue(displayValue + '3')}>3</button></td>
                        <td><button style={{minWidth: '-webkit-fill-available'}} onClick={() => addValues(operand + displayValue, '+', topValue)}>+</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => getValue(displayValue + '4')}>4</button></td>
                        <td><button onClick={() => getValue(displayValue + '5')}>5</button></td>
                        <td><button onClick={() => getValue(displayValue + '6')}>6</button></td>
                        <td><button style={{minWidth: '-webkit-fill-available'}} onClick={() => subtractValues(operand + displayValue, '-', topValue)}>-</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => getValue(displayValue + '7')}>7</button></td>
                        <td><button onClick={() => getValue(displayValue + '8')}>8</button></td>
                        <td><button onClick={() => getValue(displayValue + '9')}>9</button></td>
                        <td><button style={{minWidth: '-webkit-fill-available'}} onClick={() => multiplyValues(operand + displayValue, '*', topValue)}>*</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => getValue(displayValue + '0')}>0</button></td>
                        <td><button onClick={() => divideValues(operand + displayValue, '%', topValue)}>%</button></td>
                        <td colSpan="2"><button onClick={() => getResult(operand + displayValue, topValue)} style={{minWidth: '-webkit-fill-available'}}>=</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

