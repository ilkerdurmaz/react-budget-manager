import "./Header.css"

export default function Header() {

    return (
        <div className="header-container">
            <h2>Dashboard</h2>
            <div className="money-badge">
                <p>999.999.999$</p>
                <small>Income</small>
            </div>
            <div className="money-badge">
                <p>999.999.999$</p>
                <small>Balance</small>
            </div>
        </div>
    )
}