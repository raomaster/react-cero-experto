import { useState } from 'react';
import PropTypes from 'prop-types';

export default function CounterApp({ value }) {
  const [count, setCount] = useState(value);

  const handleAdd = () => {
    // setCount(count + 1);
    setCount((c) => c + 1);
  };
  const handleSubstract = () => {
    // setCount(count - 1);
    setCount((c) => c - 1);
  };
  const handleReset = () => {
    // setCount(value);
    setCount(value);
  };
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ count }</h2>

      <button onClick={handleAdd} type="button" value={count}>+1</button>
      <button onClick={handleSubstract} type="button" value={count}>-1</button>
      <button onClick={handleReset} type="button" value={count}>reset</button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number,
};

CounterApp.defaultProps = {
  value: 0,
};
