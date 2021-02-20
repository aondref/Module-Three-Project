

function App() {
  return (
    <div className="App">
      <h1>Create Your Budget</h1>
      <div className="budget-summary">
        <h2>Budget Summary</h2>

        <div className="container">   
          <div className="inner-container">   
            <div className="left-section">
              <div className="budget-summary-section">
                <h3>Total Monthly Income</h3>
                <p>$3,750.00</p>
              </div>
              <div className="budget-summary-section">
                <h3>Total Monthly Expenses</h3>
                <p>$2,336.00</p>
              </div>
            </div>
            
            <div className="right-section">
              <div className="budget-summary-section">
                <h3>Total Monthly Savings</h3>
                <p>$550.00</p>
              </div>
              <div className="budget-summary-section">
                <h3>Savings</h3>
                <p>$864.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="income-expenses">
        <h2>Income/Expenses</h2>

        <div className="income"></div>
        <div className="expenses"></div>
      </div>
    </div>
  );
}

export default App;
