import { useState } from "react";

function Calculator({ onChangeProps, userInput }) {
  return (
    <div action="" id="user-input">
      <div className="input-group">
        <p>
          <label>Inisial Investasi</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(e) => onChangeProps("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label>Inisial Tahunan</label>
          <input
            type="number"
            value={userInput.annualInvenstment}
            onChange={(e) => onChangeProps("annualInvenstment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Perkiraan balik Modal</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(e) => onChangeProps("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label>Modal</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(e) => onChangeProps("duration", e.target.value)}
          />
        </p>
      </div>
    </div>
  );
}

export default Calculator;
