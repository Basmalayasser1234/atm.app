import { useState } from "react";
import './App.css';


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
         صرفه`);
    }

    setNotes(result);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* input + button */}
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="ادخل المبلغ"
        style={{ padding: "10px", width: "200px", marginRight: "10px" }}
      />
      <button onClick={handleWithdraw} style={{ padding: "10px 20px" }}>
        صرف
      </button>

      {/* output */}
      <div
        style={{
          marginTop: "20px",
          border: "1px solid #ccc",
          padding: "15px",
          width: "250px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {notes.length > 0 ? (
          notes.map((line, index) => <p key={index}>{line}</p>)
        ) : (
          <p>لم يتم إدخال مبلغ بعد</p>
        )}
      </div>
    </div>
  );
}

export default App;