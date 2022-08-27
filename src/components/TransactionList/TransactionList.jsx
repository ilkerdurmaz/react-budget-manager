import "./TransactionList.css"
import Transaction from "../Transaction/Transaction"
import { useContext, useState } from "react"
import { AppContext } from './../App';

export default function TransactionList() {

    const transactionList = useContext(AppContext).transactionList;
    const setTransactionList = useContext(AppContext).setTransactionList;
    const [selectedList, setSelectedList] = useState([]);

    function selectedListHandler(id) {
        if (!selectedList.includes(id))
            setSelectedList([...selectedList, id]);
        else
            setSelectedList(selectedList.filter(item => item !== id));
    }

    function deleteSelectedListHandler() {
        let tsList = [...transactionList];
        for (let i = 0; i < selectedList.length; i++) {
            tsList = tsList.filter(item => item.id !== selectedList[i]);
            setTransactionList(tsList);
            setSelectedList([]);
        }
    }

    return (
        <div className="border rounded m-2 pb-1 shadow-sm">
            <div className="bg-dark bg-gradient rounded-top p-2 mb-2 text-light d-flex justify-content-between align-items-center">
                <small className="h5 m-0">Transactions</small>
                <button className="btn-close border border-danger border-3" onClick={selectedList.length > 0 ? deleteSelectedListHandler : undefined}></button>
            </div>


            {
                transactionList.length > 0 ?
                    transactionList.map((transaction, index) => {
                        return <Transaction key={transaction.id} index={index} selectedListHandler={selectedListHandler} />
                    }) : <small className="h5 m-1">There is no transaction here yet. </small>
            }
        </div>
    )
}