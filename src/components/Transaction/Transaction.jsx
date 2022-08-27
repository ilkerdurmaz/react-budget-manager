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
        <div className={`border rounded mx-2 my-1 p-2 shadow-sm ${isSelected ? 'bg-secondary bg-gradient text-light' : 'bg-light'}`} onClick={handleClick} >
            <small className="m-1">{transactionList[index].isExpense.toString()}</small>
            <small className="m-1">{transactionList[index].category}</small>
            <small className="m-1">{transactionList[index].desc}</small>
            <small className="m-1">{transactionList[index].amount}</small>
        </ div>
    )
}