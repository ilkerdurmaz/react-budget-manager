import "./Transaction.css"
import { useContext, useState } from "react"
import { AppContext } from './../App';
export default function Transaction({ index, selectedListHandler }) {

    const [isSelected, setIsSelected] = useState(false);
    const transactionList = useContext(AppContext).transactionList;

    function handleClick() {

        setIsSelected(current => !current);
        selectedListHandler(transactionList[index].id);
    }

    return (
        <div className="transaction" style={{ borderColor: isSelected ? 'red' : 'black' }} onClick={handleClick} >
            <small>{transactionList[index].isExpense.toString()}</small>
            <small>{transactionList[index].category}</small>
            <small>{transactionList[index].desc}</small>
            <small>{transactionList[index].amount}</small>
        </ div>
    )
}