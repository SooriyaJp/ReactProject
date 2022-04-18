import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" }); //get the month from the date
  const day = props.date.toLocaleString("en-US", { day: "2-digit" }); //get the day from the date
  const year = props.date.getFullYear(); //get the year from the date
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year ">{year}</div>
      <div className="expense-date__day">{day}th</div>
    </div>
  );
}

export default ExpenseDate;
