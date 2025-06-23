export default function UserInput() {
  return (
    <form id="user-input">
      <div className="input-group">
        <div className="input-control">
          <label>
            Initial Investment
            <input type="number" name="initialInvestment" />
          </label>
        </div>
        <div className="input-control">
          <label>
            Annual Investment
            <input type="number" name="annualInvestment" />
          </label>
        </div>
      </div>
      <div className="input-group">
        <div className="input-control">
          <label>
            Expected Return (%)
            <input type="number" name="expectedReturn" />
          </label>
        </div>
        <div className="input-control">
          <label>
            Duration
            <input type="number" name="duration" />
          </label>
        </div>
      </div>
    </form>
  );
}
