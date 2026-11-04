import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from '../redux/slices/CounterSlice';

function Counter() {
  const { count } = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleIncrement = () => {
    const value = inputRef.current?.value.trim();
    const amount = Number(value);

    if (value && !Number.isNaN(amount)) {
      dispatch(incrementByAmount(amount));
      inputRef.current.value = '';
    } else {
      alert('Please enter a valid number to increment by amount');
    }
  };

  return (
    <div className="bg-black vh-100 d-flex justify-content-center align-items-center">
      <div 
        className="border border-secondary rounded p-5 d-flex flex-column justify-content-between align-items-center"
        style={{ width: '520px', height: '380px' }}
      >
        <h1 className="text-white display-1 fw-bold mt-2">{count}</h1>

        <div className="d-flex justify-content-center gap-3">
          <button onClick={() => dispatch(decrement())} className="btn btn-warning">
            Decrement
          </button>
          <button onClick={() => dispatch(reset())} className="btn btn-danger">
            Reset
          </button>
          <button onClick={() => dispatch(increment())} className="btn btn-success">
            Increment
          </button>
        </div>

        <div className="d-flex w-100 gap-2 mb-2">
          <input
            ref={inputRef}
            type="number"
            className="form-control"
            placeholder="Enter the amount to be Incremented!!!"
          />
          <button onClick={handleIncrement} className="btn btn-primary">
            Increment by Amount
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;