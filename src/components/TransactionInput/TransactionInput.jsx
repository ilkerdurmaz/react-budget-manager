import "./TransactionInput.css"
import { useContext } from "react" //CATEGORIES ALINACAK
import { v4 as uuidv4 } from 'uuid';

export default function TransactionInput({ saveTransaction }) {

    function handleSubmit(e) {
        e.preventDefault();
        saveTransaction({
            id: uuidv4(),
            isExpense: e.target.isExpense.checked,
            desc: e.target.desc.value,
            category: e.target.category.value,
            amount: Number(e.target.amount.value),
        });
        e.target.reset();
    }

    return (
        <div className="border shadow-sm rounded m-2">

            <div className="bg-dark bg-gradient rounded-top p-2 text-light">
                <small className="h5">New Transaction</small>
            </div>

            <form onSubmit={handleSubmit} className="d-flex flex-column p-2">
                <div className="d-flex align-items-center">
                    <input required type="text" placeholder="Description" name="desc" className="form-control form-control-sm shadow-sm" />

                    <div className="d-inline-flex justify-content-center ms-1 ">
                        <small>Expense</small>
                        <div className="form-check form-switch d-flex justify-content-center">
                            <input type="checkbox" name="isExpense" className="form-check-input" role="switch" />
                        </div>
                        <small>Income</small>
                    </div>
                </div>
                <div className="d-flex">
                    <select name="category" defaultValue={"Category 1"} className="form-select me-1 my-2 shadow-sm">
                        <option value="Category" disabled>Select Category</option>
                        <option value="Category 1">Category 1</option>
                        <option value="Category 2">Category 2</option>
                        <option value="Category 3">Category 3</option>
                        <option value="Category 4">Category 4</option>
                    </select>
                    <input required type="number" placeholder="Amount" name="amount" className="form-control my-2 shadow-sm" />
                </div>
                <div className="btn-group shadow-sm">
                    <button type="submit" className="btn btn-outline-primary">ADD</button>
                    <button type="reset" className="btn btn-outline-danger">CANCEL</button>
                </div>
            </form>
        </div>
    )
}