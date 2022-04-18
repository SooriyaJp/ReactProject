
import React,{useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/Newexpense";

const Dummy_expenses = [
  {
    id: "e1",
    title: "Computer",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "New Bike",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Mobile Phone",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
 
  const [expenses,setExpenses]= useState(Dummy_expenses);
  
  function addExpenseHandler(expense) {
    setExpenses((prevExpense)=>{
    return [expense,...prevExpense]
  });
  }
  return (
    <div>
      <NewExpense onaddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
