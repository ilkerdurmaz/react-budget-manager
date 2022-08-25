import "./Transaction.css"
export default function Transaction() {
    return (
        <div className="transaction">
            <input type="checkbox" name="isChecked" />
            <small>CategoryName</small>
            <small>TransactionDescription</small>
            <small>999.999.999$</small>
        </div>
    )
}