import "./Header.css"
import { AppContext } from './../App';
import { useContext } from "react";

export default function Header() {
    const transactionList = useContext(AppContext).transactionList;

    let income = transactionList.reduce((sum, item) => sum += item.isExpense ? item.amount : 0, 0);
    let balance = income - transactionList.reduce((sum, item) => sum += !item.isExpense ? item.amount : 0, 0);

    return (
        <div className="container-fluid shadow-sm bg-dark bg-gradient text-light rounded-top">
            <div className="row">
                <div className="col d-flex align-items-center p-0 ps-2">
                    <small className="h2">Dashboard</small>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <div className="d-flex flex-column align-items-center alert alert-success py-1 my-2 me-1">
                        <small>{income}</small>
                        <small>Income</small>
                    </div>
                    <div className="d-flex flex-column align-items-center alert alert-primary py-1 my-2 ms-1">
                        <small>{balance}</small>
                        <small>Balance</small>
                    </div>
                </div>
            </div>
        </div>
    )
}