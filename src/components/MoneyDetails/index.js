import './index.css'

const MoneyDetails = props => {
  const {transactionsList} = props
  console.log('transactionsList: ', JSON.stringify(transactionsList))

  let balanceTotal = 0
  let incomeTotal = 0
  let expensesTotal = 0

  transactionsList.map(eachTxn => {
    if (eachTxn && eachTxn.transactionType === 'Income') {
      incomeTotal += parseInt(eachTxn.amount)
      balanceTotal += parseInt(eachTxn.amount)
    } else {
      expensesTotal += parseInt(eachTxn.amount)
      balanceTotal -= parseInt(eachTxn.amount)
    }
    return eachTxn
  })

  return (
    <div className="md-container">
      <div className="md-card balance">
        <img
          className="md-img"
          alt="balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        />
        <div className="md-description-container">
          <p className="md-description-text">Your Balance</p>
          <p
            data-testid="balanceAmount"
            className="md-description-text md-description-amount"
          >
            Rs {balanceTotal}
          </p>
        </div>
      </div>
      <div className="md-card income">
        <img
          className="md-img"
          alt="income"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        />
        <div className="md-description-container">
          <p className="md-description-text">Your Income</p>
          <p
            data-testid="incomeAmount"
            className="md-description-text md-description-amount"
          >
            Rs {incomeTotal}
          </p>
        </div>
      </div>
      <div className="md-card expenses">
        <img
          className="md-img"
          alt="expenses"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        />
        <div className="md-description-container">
          <p className="md-description-text">Your Expenses</p>
          <p
            data-testid="expensesAmount"
            className="md-description-text md-description-amount"
          >
            Rs {expensesTotal}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
