import "./App.css"
import Header from './Header/Header';
import TransactionInput from './TransactionInput/TransactionInput';
import TransactionList from './TransactionList/TransactionList';
import Graph from './Graph/Graph';
import { useState, createContext, useEffect, useReducer } from "react";
import Transaction from './Transaction/Transaction';

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

const initialInc = [
  { name: "Salary", amount: 0 },
  { name: "Interests", amount: 0 },
  { name: "Business", amount: 0 },
  { name: "Extra Income", amount: 0 },
]


function App() {
  const [transactionList, setTransactionList] = useState(localStorage.getItem("transactionList") ? JSON.parse(localStorage.getItem("transactionList")) : []);

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
          default: return undefined;
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
      default: return undefined;
    }
    setTransactionList([...transactionList, transaction]);
  }


  useEffect(() => {
    localStorage.setItem("transactionList", JSON.stringify(transactionList));
    localStorage.setItem("expenses", JSON.stringify(initialExp));
  }, [transactionList]);


  return (
    <AppContext.Provider value={{ transactionList, setTransactionListHandler, initialExp, initialInc }}>
      <div className="border rounded my-4">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-7 text-center">
              <Graph categories={initialExp} />
            </div>

            <div className="col-sm-12 col-md-5">
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