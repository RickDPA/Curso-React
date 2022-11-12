import { useState } from 'react';
import PropTypes from 'prop-types';



export const CounterApp = ({value}) => {

    const [ counter, setCounter] = useState(value);

    const suma = () => {
        setCounter(counter + 1);
    }

    const resta = () => {
        setCounter(counter -1);
    }

    const resetear = () => {
        setCounter(value);
    }

    return (
        <>

            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={suma}>+1</button>
            <button onClick={resta}>-1</button>
            <button onClick={resetear} class="rojo"> Reset</button>

        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
