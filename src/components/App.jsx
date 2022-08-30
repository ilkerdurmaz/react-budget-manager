import Header from './Header';
import TransactionInput from './TransactionInput';
import TransactionList from './TransactionList';
import Graph from './Graph';
import { useState, createContext, useEffect } from "react";

export const AppContext = createContext();

const initialExp = localStorage.getItem("expenses") ? JSON.parse(localStorage.getItem("expenses")) : [
  { name: "Clothing", amount: 0, color: "tomato" },
  { name: "Food", amount: 0, color: "orange" },
  { name: "Travel", amount: 0, color: "gold" },
  { name: "Health Care", amount: 0, color: "cyan" },
  { name: "Shopping", amount: 0, color: "navy" },
  { name: "Bills", amount: 0, color: "purple" },
  { name: "Others", amount: 0, color: "grey" }
];

const initialInc = localStorage.getItem("incomes") ? JSON.parse(localStorage.getItem("incomes")) : [
  { name: "Salary", amount: 0, color: "grey" },
  { name: "Interests", amount: 0, color: "purple" },
  { name: "Business", amount: 0, color: "navy" },
  { name: "Extra Income", amount: 0, color: "cyan" },
]

function App() {
  const [transactionList, setTransactionList] = useState(localStorage.getItem("transactionList") ? JSON.parse(localStorage.getItem("transactionList")) : []);

  const [chartSwitch, setChartSwitch] = useState(true);

  function setTransactionListHandler(transactions) {

    let arr = [...transactionList];

    for (let i = 0; i < transactions.length; i++) {
      let transaction = transactionList.filter(item => item.id === transactions[i])
      if (transaction[0]) {
        switch (transaction[0].category) {
          case "Clothing":
            initialExp[0].amount -= transaction[0].amount;
            break;
          case "Food":
            initialExp[1].amount -= transaction[0].amount;
            break;
          case "Travel":
            initialExp[2].amount -= transaction[0].amount;
            break;
          case "Health Care":
            initialExp[3].amount -= transaction[0].amount;
            break;
          case "Shopping":
            initialExp[4].amount -= transaction[0].amount;
            break;
          case "Bills":
            initialExp[5].amount -= transaction[0].amount;
            break;
          case "Others":
            initialExp[6].amount -= transaction[0].amount;
            break;
          case "Salary":
            initialInc[0].amount -= transaction[0].amount;
            break;
          case "Interests":
            initialInc[1].amount -= transaction[0].amount;
            break;
          case "Business":
            initialInc[2].amount -= transaction[0].amount;
            break;
          case "Extra Income":
            initialInc[3].amount -= transaction[0].amount;
            break;
          default: break;
        }
      }

      arr = arr.filter(item => item.id !== transactions[i])
    }

    setTransactionList([...arr]);
  }

  function updateTransactionList(transaction) {
    switch (transaction.category) {
      case "Clothing":
        initialExp[0].amount += transaction.amount;
        break;
      case "Food":
        initialExp[1].amount += transaction.amount;
        break;
      case "Travel":
        initialExp[2].amount += transaction.amount;
        break;
      case "Health Care":
        initialExp[3].amount += transaction.amount;
        break;
      case "Shopping":
        initialExp[4].amount += transaction.amount;
        break;
      case "Bills":
        initialExp[5].amount += transaction.amount;
        break;
      case "Others":
        initialExp[6].amount += transaction.amount;
        break;
      case "Salary":
        initialInc[0].amount += transaction.amount;
        break;
      case "Interests":
        initialInc[1].amount += transaction.amount;
        break;
      case "Business":
        initialInc[2].amount += transaction.amount;
        break;
      case "Extra Income":
        initialInc[3].amount += transaction.amount;
        break;
      default: break;
    }
    setTransactionList([...transactionList, transaction]);
  }

  useEffect(() => {
    localStorage.setItem("transactionList", JSON.stringify(transactionList));
    localStorage.setItem("expenses", JSON.stringify(initialExp));
    localStorage.setItem("incomes", JSON.stringify(initialInc));
  }, [transactionList]);

  return (
    <AppContext.Provider value={{ transactionList, setTransactionListHandler, initialExp, initialInc }}>
      <div className="border rounded my-4">
        <Header />
        <div className="container-fluid">
          <div className="row  flex-row-reverse">
            <div className="col-sm-12 col-md-6 ps-md-0">
              <div className="border rounded my-2 shadow-sm">
                <div className="bg-dark bg-gradient rounded-top p-2 text-light d-flex justify-content-between align-items-center">

                  <button className="bg-transparent border-0 d-flex align-items-center" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" onClick={() => setChartSwitch(!chartSwitch)}>
                    <span className="carousel-control-prev-icon"></span>
                  </button>

                  <small className="h5">{chartSwitch ? "Expense Chart" : "Income Chart"}</small>

                  <button className="bg-transparent border-0 d-flex align-items-center" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" onClick={() => setChartSwitch(!chartSwitch)}>
                    <span className="carousel-control-next-icon"></span>
                  </button>

                </div>
                <div id="carouselExampleControls" className="carousel carousel-dark slide" data-bs-ride="false">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <Graph categories={initialExp} />
                    </div>
                    <div className="carousel-item">
                      <Graph categories={initialInc} />
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <TransactionInput saveTransaction={updateTransactionList} />
              <TransactionList />

            </div>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App;