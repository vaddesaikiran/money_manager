import './index.css'

const TransactionItem = props => {
  const {txnData, onDeleteTransaction} = props
  const {id, title, amount, transactionType} = txnData

  const onDelete = () => {
    onDeleteTransaction(id)
  }
  console.log('props.txnData: ', JSON.stringify(txnData))
  return (
    <li className="money-transaction-list-item mt-list-item-data">
      <p className="mt-list-text">{title}</p>
      <p className="mt-list-text">Rs {amount}</p>
      <p className="mt-list-text">{transactionType}</p>
      <button
        type="button"
        className="delete-btn"
        data-testid="delete"
        onClick={onDelete}
      >
        <img
          className="delete-img"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        />
      </button>
    </li>
  )
}

export default TransactionItem
