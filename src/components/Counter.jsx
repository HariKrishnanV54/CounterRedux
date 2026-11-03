import React from 'react'

function Counter() {
  return (
    <div className="bg-black vh-100 d-flex justify-content-center align-items-center">
      <div 
        className="border border-secondary rounded p-5 d-flex flex-column justify-content-between align-items-center"
        style={{ width: '520px', height: '380px' }}
      >
        <h1 className="text-white display-1 fw-bold mt-2">0</h1>

        <div className="d-flex justify-content-center gap-3">
          <button className="btn btn-warning ">Decrement</button>
          <button className="btn btn-danger ">Reset</button>
          <button className="btn btn-success ">Increment</button>
        </div>

        <div className="d-flex w-100 gap-2 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Enter the amount to be Incremented!!!"
          />
          <button className="btn btn-primary ">
            Increment by Amount
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter