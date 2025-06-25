export default function UserInput({ onChange, userInput }) {
  return (
    <form id="user-input">
      <div className="input-group">
        <div className="input-control">
          <label>Initial Investment</label>
          <input
            type="number"
            required
            name="initialInvestment"
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", +event.target.value)
            }
          />
        </div>
        <div className="input-control">
          <label>Annual Investment</label>
          <input
            type="number"
            required
            name="annualInvestment"
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", +event.target.value)
            }
          />
        </div>
      </div>
      <div className="input-group">
        <div className="input-control">
          <label>Expected Return (%)</label>
          <input
            type="number"
            required
            name="expectedReturn"
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChange("expectedReturn", +event.target.value)
            }
          />
        </div>
        <div className="input-control">
          <label>Duration</label>
          <input
            type="number"
            required
            name="duration"
            value={userInput.duration}
            onChange={(event) => onChange("duration", +event.target.value)}
          />
        </div>
      </div>
    </form>
  );
}
