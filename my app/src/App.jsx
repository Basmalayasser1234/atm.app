import { useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import OutputBox from "./components/OutputBox";

function App() {
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState([]);

  const handleWithdraw = () => {
    let money = parseInt(amount);
    if (isNaN(money) || money <= 0) {
      alert("من فضلك ادخل رقم صحيح");
      return;
    }

    let result = [];
    let denominations = [200, 100, 50];

    denominations.forEach((note) => {
      let count = Math.floor(money / note);
      if (count > 0) {
        result.push(`${count} × ${note}`);
        money = money % note;
      }
    });

    if (money > 0) {
      result.push(المتبق`ي ${money} لا يمكن صرفه`);
    }

    setNotes(result);
  };

  return (
    <div className="container">
      <h1>ATM Machine</h1>
      <InputBox amount={amount} setAmount={setAmount} handleWithdraw={handleWithdraw} />
      <OutputBox notes={notes} />
    </div>
  );
}

export default App;