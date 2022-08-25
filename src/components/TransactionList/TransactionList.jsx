import "./TransactionList.css"
import Transaction from "../Transaction/Transaction"

export default function TransactionList() {
    return (
        <div className="transactions">
            <div className="title-container">
                <h4>Transactions</h4>
                <button>delete</button>
            </div>
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
        </div>
    )
}