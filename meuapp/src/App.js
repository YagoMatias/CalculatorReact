import React from "react";

const App = () => {
  const [result, setResult] = React.useState("");

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
    <div className="Calculator">
      <input type="text" placeholder="0" value={result}></input>
      <input type="button" value={"9"} onClick={handleClick} />
      <input type="button" value={"8"} onClick={handleClick} />
      <input type="button" value={"7"} onClick={handleClick} />
      <input type="button" value={"6"} onClick={handleClick} />
      <input type="button" value={"5"} onClick={handleClick} />
      <input type="button" value={"4"} onClick={handleClick} />
      <input type="button" value={"3"} onClick={handleClick} />
      <input type="button" value={"2"} onClick={handleClick} />
      <input type="button" value={"1"} onClick={handleClick} />
      <input type="button" value={"0"} onClick={handleClick} />
      <input type="button" value={"."} onClick={handleClick} />
      <input type="button" value={"+"} onClick={handleClick} />
      <input type="button" value={"-"} onClick={handleClick} />
      <input type="button" value={"*"} onClick={handleClick} />
      <input type="button" value={"/"} onClick={handleClick} />
      <input type="button" value={"DEL"} onClick={clearDisplay} />
      <input type="button" value={"= "} onClick={calculate} />
    </div>
  );
};

export default App;
