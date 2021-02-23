

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
                <p>$6,000.00</p>
              </div>
              <div className="budget-summary-section">
                <h3>Total Monthly Expenses</h3>
                <p>$2,336.00</p>
              </div>
            </div>
            
            <div className="right-section">
              <div className="budget-summary-section">
                <h3>Total Monthly Savings</h3>
                <p>$2,000.00</p>
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

        <div className="container">
          <div className="inner-container"> 
            <div className="income">
              <h3>Income</h3>
              <div className="income-section">
                <h4>Salary</h4>
                <p>$70,000.00</p>
                <table className="income-table">
                  <thead>
                    <tr>
                      <th>Income</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Salary</td>
                      <td>$70,000.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="expenses">
              <h3>Expenses</h3>
              <div className="expenses-container">
                <h4>Rent</h4>
                <p>$1,500.00</p>
                <table className="expense-table">
                  <thead>
                    <tr>
                      <th>Expenses</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Rent</td>
                      <td>$1,500.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
