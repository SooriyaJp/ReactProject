import { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  function TitleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }
  function AmountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }
  function DateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }
  function submitHandler(event)
  {
    event.preventDefault();//default javascript method

    const ExpenseData = {
        title : enteredTitle,
        amount : +enteredAmount,
        date : new Date(enteredDate)
    }
    props.onSaveExpenseData(ExpenseData);
    props.onCancel();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={TitleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0" set="0" value = {enteredAmount} onChange={AmountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2011-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={DateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
      <button type="button" onClick={props.onCancel}>Cancel</button>
      <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
