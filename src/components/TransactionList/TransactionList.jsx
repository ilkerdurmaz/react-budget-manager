import "./TransactionList.css"
import Transaction from "../Transaction/Transaction"
import { useContext, useState } from "react"
import { AppContext } from './../App';

export default function TransactionList() {

    const transactionList = useContext(AppContext).transactionList;
    const setTransactionList = useContext(AppContext).setTransactionListHandler;
    const [selectedList, setSelectedList] = useState([]);

    function selectedListHandler(id) {
        if (!selectedList.includes(id))
            setSelectedList([...selectedList, id]);
        else
            setSelectedList(selectedList.filter(item => item !== id));
    }

    function deleteSelectedListHandler() {
        setTransactionList(selectedList);
    }

    return (
        <div className="border rounded mb-2 mt-1 shadow-sm">
            <div className="bg-dark bg-gradient rounded-top p-2 mb-2 text-light d-flex justify-content-between align-items-center">
                <small className="h5 m-0">Transactions</small>
                <button className="btn-close btn-close-white border border-2 border-primary " onClick={selectedList.length > 0 ? deleteSelectedListHandler : undefined}></button>
            </div>

            {
                transactionList.length > 0 ?
                    transactionList.map((transaction, index) => {
                        return <Transaction key={transaction.id} index={index} selectedListHandler={selectedListHandler} />
                    }) : <div className="alert alert-warning m-2">There is no transaction here yet.</div>

            }
        </div>
    )
}