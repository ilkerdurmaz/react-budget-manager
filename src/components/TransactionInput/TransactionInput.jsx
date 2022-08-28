import "./TransactionInput.css"
import { useContext, useRef, useState } from "react"
import { AppContext } from './../App'; //CATEGORIES ALINACAK
import { v4 as uuidv4 } from 'uuid';

export default function TransactionInput({ saveTransaction }) {
    const expenseCategories = useContext(AppContext).initialExp;
    const incomeCategories = useContext(AppContext).initialInc;
    const selectRef = useRef(null);
    const [categories, setCategories] = useState(expenseCategories)

    function categorySwitcher(e) {
        if (e.target.checked)
            setCategories(incomeCategories)
        else
            setCategories(expenseCategories)
    }

    function handleSubmit(e) {
        e.preventDefault();
        saveTransaction({
            id: uuidv4(),
            isIncome: e.target.isIncome.checked,
            desc: e.target.desc.value,
            category: e.target.category.value,
            amount: Number(e.target.amount.value),
        });
        e.target.reset();
        categorySwitcher(e.target)
    }

    return (
        <div className="border shadow-sm rounded my-2">

            <div className="bg-dark bg-gradient rounded-top p-2 text-light">
                <small className="h5">New Transaction</small>
            </div>

            <form onSubmit={handleSubmit} className="d-flex flex-column p-2">
                <div className="d-flex align-items-center">
                    <input required type="text" placeholder="Description" name="desc" className="form-control form-control-sm shadow-sm" />

                    <div className="d-inline-flex justify-content-center ms-1 ">
                        <small>Expense</small>
                        <div className="form-check form-switch d-flex justify-content-center">
                            <input type="checkbox" name="isIncome" className="form-check-input" role="switch" onChange={categorySwitcher} />
                        </div>
                        <small>Income</small>
                    </div>
                </div>
                <div className="d-flex">
                    <select ref={selectRef} name="category" className="form-select me-1 my-2 shadow-sm">
                        <option value="" disabled>Select Category</option>
                        {
                            categories.map((category, index) => {
                                return <option value={category.name} key={index}>{category.name}</option>
                            })
                        }
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