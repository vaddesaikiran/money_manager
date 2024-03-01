import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem/index'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    transactionType: transactionTypeOptions[0].displayText,
    transactionsList: [],
  }

  getTxnType = id => {
    let txnType
    transactionTypeOptions.forEach(eachType => {
      if (id === eachType.optionId) txnType = eachType.displayText
    })
    return txnType
  }

  handleChangeTransactionTypeOptions = event => {
    const txnType = this.getTxnType(event.target.value)

    console.log('txnType', txnType)
    this.setState({transactionType: txnType})
  }

  onChangeTitleInput = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amount: parseInt(event.target.value)})
  }

  addTransaction = event => {
    event.preventDefault()
    const {title, amount, transactionType, transactionsList} = this.state
    const newTxn = {id: uuid(), title, amount, transactionType}
    console.log('newTxn: ', newTxn)
    this.setState({
      title: '',
      amount: '',
      transactionType: transactionTypeOptions[0].displayText,
      transactionsList: [...transactionsList, newTxn],
    })
  }

  onDeleteTransaction = id => {
    this.setState(prevState => ({
      transactionsList: prevState.transactionsList.filter(
        eachTxn => eachTxn.id !== id,
      ),
    }))
  }

  render() {
    const {title, amount, transactionType, transactionsList} = this.state
    const txnType = this.getTxnType(transactionType)
    console.log('transactionType: ', txnType)

    return (
      <div className="money-manager-container">
        <div className="profile-container">
          <h1 className="profile-name-header">Hi, Richard</h1>
          <p className="profile-description">
            Welcome back to your <span className="blue">Money Manager</span>
          </p>
        </div>
        <MoneyDetails transactionsList={transactionsList} />
        <div className="money-transaction-container">
          <form
            onSubmit={this.addTransaction}
            className="money-transaction-inner-container mt-form-input"
          >
            <h1 className="money-transaction-header">Add Transaction</h1>
            <label className="label" htmlFor="title">
              TITLE
            </label>
            <input
              className="txn-input"
              placeholder="TITLE"
              value={title}
              onChange={this.onChangeTitleInput}
              type="text"
              id="title"
            />
            <label className="label" htmlFor="amount">
              AMOUNT
            </label>
            <input
              className="txn-input"
              placeholder="AMOUNT"
              value={amount}
              onChange={this.onChangeAmountInput}
              type="text"
              id="amount"
            />
            <label className="label" htmlFor="type">
              TYPE
            </label>
            <select
              className="txn-input"
              value={txnType}
              onChange={this.handleChangeTransactionTypeOptions}
              id="type"
            >
              {transactionTypeOptions.map(eachType => (
                <option key={eachType.optionId} value={eachType.optionId}>
                  {eachType.displayText}
                </option>
              ))}
            </select>
            <button className="button" type="submit">
              Add
            </button>
          </form>
          <div className="money-transaction-inner-container mt-txn-list">
            <h1 className="money-transaction-header">History</h1>
            <div className="money-transaction-list">
              <div className="money-transaction-list-item">
                <p className="mt-list-text mt-list-header">Title</p>
                <p className="mt-list-text mt-list-header">Amount</p>
                <p className="mt-list-text mt-list-header">Type</p>
                <p className="delete-btn"> </p>
              </div>
              <ul className="mt-list-container">
                {transactionsList.map(txnData => (
                  <TransactionItem
                    txnData={txnData}
                    key={txnData.id}
                    onDeleteTransaction={this.onDeleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
