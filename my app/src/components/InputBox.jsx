function InputBox({ amount, setAmount, handleWithdraw }) {
  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="ادخل المبلغ"
        className="input"
      />
      <button onClick={handleWithdraw} className="button">
        صرف
      </button>
    </div>
  );
}

export default InputBox;