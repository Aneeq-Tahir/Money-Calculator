"use client";
import React, { useState } from "react";

export default function Home() {
   const [income, setIncome] = useState("0");
   const [expense, setExpense] = useState("0");
   const [total, setTotal] = useState(0);
   const [checkIncome, setCheckIncome] = useState("Income");

   const calculateTotal = () => {
      const newIncome = Number(income);
      const newExpense = Number(expense);
      
      if (newIncome < 0 || newExpense < 0) setTotal(newIncome + newExpense);
      else setTotal(newIncome - newExpense);
   };

   return (
      <>
         <div className="flex justify-center p-6">
            <div className="flex flex-col gap-4">
               <h1 className="font-extrabold text-3xl text-sky-900 sm:text-5xl">Check Your Balance</h1>
               <div>
                  <h1 className="text-emerald-700 font-bold sm:text-xl">Income: {income}$</h1>
                  <h1 className="text-red-700 font-bold sm:text-xl">Expense: {expense}$</h1>
                  <h1 className={`font-bold sm:text-xl ${total < 0 ? 'text-red-700': 'text-emerald-700'}`}>Total: {total}$</h1>
               </div>
               <form className="flex flex-col gap-4">
                  <div className="flex gap-2">
                     <input
                        type="radio"
                        name="radio"
                        id="radioIncome"
                        value={"Income"}
                        onChange={(e) => setCheckIncome(e.target.value)}
                     />
                     <label className=" sm:text-xl" htmlFor="radioIncome">Income</label>
                     <input
                        value={"Expense"}
                        type="radio"
                        name="radio"
                        id="radioExpense"
                        onChange={(e) => setCheckIncome(e.target.value)}
                     />
                     <label className=" sm:text-xl" htmlFor="radioExpense">Expense</label>
                  </div>
                  <h1 className=" sm:text-xl">Enter Your {checkIncome}:</h1>
                  <input
                     className="inline-block bg-transparent max-w-[20rem] border-[1px] outline-none focus:ring-1 focus:ring-neutral-600 focus:border-neutral-600 p-2 rounded"
                     type="number"
                     onChange={(e) => {
                        checkIncome === "Income"
                           ? setIncome(e.target.value)
                           : setExpense(e.target.value);
                     }}
                     name="input"
                  />
                  <button
                     className=" bg-sky-700 rounded p-2 max-w-[15rem] sm:text-xl"
                     type="button"
                     onClick={calculateTotal}
                  >
                     Calculate Money 🤑
                  </button>
               </form>
            </div>
         </div>
      </>
   );
}
