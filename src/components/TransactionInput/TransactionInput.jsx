import "./TransactionInput.css"
import { useContext } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TransactionInput({ saveTransaction }) {

    function handleSubmit(e) {
        e.preventDefault();
        saveTransaction({
            id: uuidv4(),
            isExpense: e.target.isExpense.checked,
            desc: e.target.desc.value,
            category: e.target.category.value,
            amount: e.target.amount.value,
        });
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>

            <small>New Transaction</small>

            <div className="inc-exp-group">
                <small>Income</small>
                <input type="checkbox" name="isExpense" />
                <small>Expense</small>
            </div>

            <input required type="text" placeholder="Description" name="desc" />

            <div className="cat-cost-group">
                <select name="category" defaultValue={"Category 1"} >
                    <option value="Category" disabled>Select Category</option>
                    <option value="Category 1">Category 1</option>
                    <option value="Category 2">Category 2</option>
                    <option value="Category 3">Category 3</option>
                    <option value="Category 4">Category 4</option>
                </select>
                <input required type="number" placeholder="Amount" name="amount" />
            </div>

            <div className="btn-group">
                <button type="submit">ADD</button>
                <button type="reset">CANCEL</button>
            </div>

        </form>
    )
}