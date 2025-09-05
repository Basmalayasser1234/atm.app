function OutputBox({ notes }) {
  return (
    <div className="output">
      {notes.length > 0 ? (
        notes.map((line, index) => <p key={index}>{line}</p>)
      ) : (
        <p>لم يتم إدخال مبلغ بعد</p>
      )}
    </div>
  );
}

export default OutputBox;