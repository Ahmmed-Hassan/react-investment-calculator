import { useState } from "react";

export default function UserInputs({onChangeValue, userData}) {




  return (
    <section id="user-input">
      <div className="input-group">
        <p>
        <label htmlFor="initial-investment">Initial Investment</label>
        <input type="number" name="initial-investment" value={userData.initialInvestment} required onChange={(event) => onChangeValue('initialInvestment', event.target.value)}/>
        </p>
        <p>
        <label htmlFor="annual-investment">Annual Investment</label>
        <input type="number" name="annual-investment" value={userData.annualInvestment} required onChange={(event) => onChangeValue('annualInvestment', event.target.value)}/>
        </p>
        </div>
        <div className="input-group">
        <p>
        <label htmlFor="expected-return">Expected Return</label>
        <input type="number" name="expected-return" value={userData.expectedReturn} required onChange={(event) => onChangeValue('expectedReturn', event.target.value)}/>
        </p>
        <p>
        <label htmlFor="duration">Duration</label>
        <input type="number" name="duration" value={userData.duration} required onChange={(event) => onChangeValue('duration', event.target.value)}/>
        </p>
        </div>
    </section>
  );
}
