import "./App.css"
import Header from './Header/Header';
import TransactionInput from './TransactionInput/TransactionInput';
import TransactionList from './TransactionList/TransactionList';
import Graph from './Graph/Graph';
import { useState, createContext, useEffect } from "react";

export const AppContext = createContext();


function App() {
  const [categories, setCategories] = useState({ // CONTEXTE DAHİL EDİLECEK
    "Clothing": 0,
    "Food": 0,
    "Travel": 0,
    "Health Care": 0,
    "Shopping": 0,
    "Bills": 0,
    "Others:": 0
  });

  const [transactionList, setTransactionList] = useState(localStorage.getItem("transactionList") ? JSON.parse(localStorage.getItem("transactionList")) : []);

  function updateTransactionList(transaction) {
    setTransactionList([...transactionList, transaction]);
  }

  useEffect(() => {
    localStorage.setItem("transactionList", JSON.stringify(transactionList));
  }, [transactionList]);

  return (
    <AppContext.Provider value={{ transactionList, setTransactionList }}>
      <div className="border rounded my-4 container p-0">
        <Header />
        <div className="row">

          <div className="col-sm-12 col-md-7">
            <TransactionInput saveTransaction={updateTransactionList} />
            <TransactionList />
          </div>

          <div className="col-sm-12 col-md-5 text-center">
            <h2>Graph Header</h2>
            <Graph />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App;

