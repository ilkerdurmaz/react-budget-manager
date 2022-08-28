import "./App.css"
import Header from './Header/Header';
import TransactionInput from './TransactionInput/TransactionInput';
import TransactionList from './TransactionList/TransactionList';
import Graph from './Graph/Graph';
import { useState, createContext, useEffect } from "react";

export const AppContext = createContext();

const initialExp = [
  { name: "Clothing", expense: 0 },
  { name: "Food", expense: 0 },
  { name: "Travel", expense: 0 },
  { name: "Health Care", expense: 0 },
  { name: "Shopping", expense: 0 },
  { name: "Bills", expense: 0 },
  { name: "Others", expense: 0 }
];


const initialInc = [
  { name: "Salary", income: 0 },
  { name: "Interests", income: 0 },
  { name: "Business", income: 0 },
  { name: "Extra Income", income: 0 },
]

function App() {
  const [expenseCategories, setExpenseCategories] = useState(initialExp);

  const [incomeCategories, setIncomeCategories] = useState(initialInc);

  const [transactionList, setTransactionList] = useState(localStorage.getItem("transactionList") ? JSON.parse(localStorage.getItem("transactionList")) : []);

  function updateTransactionList(transaction) {
    setTransactionList([...transactionList, transaction]);
  }

  useEffect(() => {
    localStorage.setItem("transactionList", JSON.stringify(transactionList));
  }, [transactionList]);

  return (
    <AppContext.Provider value={{ transactionList, setTransactionList, expenseCategories, incomeCategories }}>
      <div className="border rounded my-4">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-5 text-center">
              <h2>Graph Header</h2>
              <Graph />
            </div>

            <div className="col-sm-12 col-md-7">
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
/*

    if (transactionList.length > 0) {
      for (let i = 0; i < transactionList.length; i++) {
        switch (transactionList[i].category) {
          case 'Clothing':
            setExpenseCategories(prev => ({ ...prev, "Clothing": prev.Clothing + transactionList[i].amount }))
            break;
          case 'Food':
            setExpenseCategories(prev => ({ ...prev, "Food": prev.Food + transactionList[i].amount }))
            break;
          case 'Travel':
            setExpenseCategories(prev => ({ ...prev, "Travel": prev.Travel + transactionList[i].amount }))
            break;
          case 'Health Care':
            setExpenseCategories(prev => ({ ...prev, "Health Care": prev["Health Care"] + transactionList[i].amount }))
            break;
          case 'Shopping':
            setExpenseCategories(prev => ({ ...prev, "Shopping": prev.Shopping + transactionList[i].amount }))
            break;
          case 'Bills':
            setExpenseCategories(prev => ({ ...prev, "Bills": transactionList[i].amount }))
            break;
          default: setExpenseCategories(prev => ({ ...prev, "Others": transactionList[i].amount }))
        }
      }
    }

    */