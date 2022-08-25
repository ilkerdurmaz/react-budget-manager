import "./App.css"
import Header from './Header/Header';
import TransactionInput from './TransactionInput/TransactionInput';
import TransactionList from './TransactionList/TransactionList';
import Graph from './Graph/Graph';
import { useState } from "react";

function App() {
  const [categories, setCategories] = useState({
    "Clothing": 0,
    "Food": 0,
    "Travel": 0,
    "Health Care": 0,
    "Shopping": 0,
    "Bills": 0,
    "Others:": 0
  });

  return (
    <div className="App">
      <Header />
      <div className="body-container">
        <div className="transactions-container">
          <TransactionInput />
          <TransactionList />
        </div>
        <div className="graph-container">
          <h2>Graph Header</h2>
          <Graph />
        </div>
      </div>
    </div>
  )
}

export default App;
