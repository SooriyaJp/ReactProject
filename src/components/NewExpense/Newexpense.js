import React,{useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm"


function NewExpense(props)
{
    function saveExpenseDataHandler(enteredExpenseData)
    {
        const expenseData={
            ...enteredExpenseData,
            id : Math.random().toString()
        };
        props.onaddExpense(expenseData);
    }
    const[isClicked, setIsClicked]=useState(false);

    function addExpenseClicked()
    {
        setIsClicked(true);
    }
    function addExpenseCancelled()
    {
        setIsClicked(false);
    }

    return (
        <div className="new-expense">
            {!isClicked &&  <button onClick={addExpenseClicked}>Add new Expense</button>}
            {isClicked && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={addExpenseCancelled}/>}
        </div>
    );
}


export default NewExpense;