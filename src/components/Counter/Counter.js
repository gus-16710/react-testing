import { useState } from "react";
import { Link } from "react-router-dom";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const decrementCounter = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Counter</h5>
        <Link to="/" className="mb-4 d-block">
          Home
        </Link>
        <button
          className="btn btn-primary"
          data-testid="increment"
          onClick={incrementCounter}
        >
          Increment
        </button>
        <p data-testid="counter">{counter}</p>
        <button
          className="btn btn-secondary"
          data-testid="decrement"
          onClick={decrementCounter}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
