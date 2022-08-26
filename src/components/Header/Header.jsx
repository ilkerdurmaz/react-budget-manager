import "./Header.css"
import { AppContext } from './../App';
import { useContext } from "react";

export default function Header() {
    const transactionList = useContext(AppContext).transactionList;

    let income = transactionList.reduce((sum, item) => sum += item.isExpense ? item.amount : 0, 0);
    let balance = income - transactionList.reduce((sum, item) => sum += !item.isExpense ? item.amount : 0, 0);

    return (
        <div className="header-container">
            <h2>Dashboard</h2>
            <div className="money-badge">
                <p>{income}</p>
                <small>Income</small>
            </div>
            <div className="money-badge">
                <p>{balance}</p>
                <small>Balance</small>
            </div>
        </div>
    )
}