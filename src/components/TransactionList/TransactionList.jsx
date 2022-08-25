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
        }
        setTransactionList(tsList);
        setSelectedList([]);
    }

    return (
        <div className="transactions">
            <div className="title-container">
                <h4>Transactions</h4>
                <button onClick={deleteSelectedListHandler}>delete</button>
            </div>
            {
                transactionList.length > 0 ?
                    transactionList.map((transaction, index) => {
                        return <Transaction key={transaction.id} index={index} selectedListHandler={selectedListHandler} />
                    }) : <h4>There is no transaction yet.</h4>
            }
        </div>
    )
}