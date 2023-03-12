import React from "react";

const App = () => {
  const [result, setResult] = React.useState("");
  const [titulo, setTitulo] = React.useState("");

  const handleClick = (event) => {
    setResult(result.concat(event.target.value));
  };

  function clearDisplay() {
    setResult("");
  }

  function calculate() {
    setResult(eval(result).toString());
  }

  return (
    <>
      <h1>Calculator React</h1>
      <div className="calculator">
        <input type="text" placeholder="0" value={result} className="display" />
        <input
          type="button"
          value={"9"}
          onClick={handleClick}
          className="button"
        />
        <input
          type="button"
          value={"8"}
          onClick={handleClick}
          className="button"
        />
        <input
          type="button"
          value={"7"}
          onClick={handleClick}
          className="button"
        />
        <input
          type="button"
          value={"6"}
          onClick={handleClick}
          className="button"
        />
        <input
          type="button"
          value={"5"}
          onClick={handleClick}
          className="button"
        />
        <input
          type="button"
          value={"4"}
          onClick={handleClick}
          className="button"
        />
        <input
          type="button"
          value={"3"}
          onClick={handleClick}
          className="button"
        />
        <input
          type="button"
          value={"2"}
          onClick={handleClick}
          className="button"
        />
        <input
          type="button"
          value={"1"}
          onClick={handleClick}
          className="button"
        />
        <input
          type="button"
          value={"0"}
          onClick={handleClick}
          className="button"
        />
        <input
          type="button"
          value={"."}
          onClick={handleClick}
          className="button"
        />
        <input
          type="button"
          value={"+"}
          onClick={handleClick}
          className="button"
        />
        <input
          type="button"
          value={"-"}
          onClick={handleClick}
          className="button"
        />
        <input
          type="button"
          value={"*"}
          onClick={handleClick}
          className="button"
        />
        <input
          type="button"
          value={"/"}
          onClick={handleClick}
          className="button"
        />
        <input
          type="button"
          value={"DEL"}
          onClick={clearDisplay}
          className="button del"
        />
        <input
          type="button"
          value={"= "}
          onClick={calculate}
          className="button igual"
        />
      </div>
    </>
  );
};

export default App;
