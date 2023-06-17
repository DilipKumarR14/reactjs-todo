import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEdit, setIsEdit] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExp(expenseData);
    setIsEdit(false);
  };

  const editExpenseDataHandler = () => {
    setIsEdit(true);
  };

  const stopEditingHandler = () => {
    setIsEdit(false);
  };
  return (
    <div className="new-expense">
      {!isEdit ? (
        <button onClick={editExpenseDataHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
        onCancel={stopEditingHandler} />
      )}

      {/* {!isEdit &&  <button onClick={editExpenseDataHandler}>Add New Expense</button>}
      {isEdit &&   <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />} */}
    </div>
  );
};

export default NewExpense;
