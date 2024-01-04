import React from "react";

const Card = () => {
  return (
    <div>
      <div className="card mt-3 rounded-6 overflow-hidden" style={{ width: "18rem", maxHeight: "360px" }}>
        <img src="https://source.unsplash.com/random/?burger" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text.</p>
          <div className="container w-100">
            <select className="m-2 h-100 bg-sucess rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i++} value={i++}>
                    {i++}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-sucess rounded">
              <option value="full">Full</option>
              <option value="half">Half</option>
            </select>
            <span className="fs-6">Total Price:</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
