import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const inputAddition = (val) => {
    setValue((value) => [...value, val + " "]);
    console.log(value);
  };

  const eraseInput = () => {
    setResult("");
    setValue("");
  };

  const printResult = () => {
    setResult("");
    let result = value.join("");
    let res = eval(result);
    setResult((result) => [...result, res]);
  };

  let wrapper = document.getElementById("wrapper");

  onmousedown = (event) => {
    wrapper.style.position = "absolute";

    function moveAt(event) {
      wrapper.style.left = event.pageX - wrapper.offsetWidth / 2 + "px";
      wrapper.style.top = event.pageY - wrapper.offsetHeight / 2 + "px";
    }

    document.onmousemove = function (event) {
      moveAt(event);
    };

    wrapper.onmouseup = function () {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };

  return (
    <div className="App">
      <div className="wrapper" id="wrapper">
        <div className="calculator">
          <Input value={value} result={result} />
          <div className="row">
            <Button value="7" handleClick={inputAddition} />
            <Button value="8" handleClick={inputAddition} />
            <Button value="9" handleClick={inputAddition} />
            <Button value="/" handleClick={inputAddition} />
          </div>
          <div className="row">
            <Button value="4" handleClick={inputAddition} />
            <Button value="5" handleClick={inputAddition} />
            <Button value="6" handleClick={inputAddition} />
            <Button value="*" handleClick={inputAddition} />
          </div>
          <div className="row">
            <Button value="1" handleClick={inputAddition} />
            <Button value="2" handleClick={inputAddition} />
            <Button value="3" handleClick={inputAddition} />
            <Button value="+" handleClick={inputAddition} />
          </div>
          <div className="row">
            <Button value="0" handleClick={inputAddition} />
            <Button value="CE" handleClick={eraseInput} />
            <Button value="=" handleClick={printResult} />
            <Button value="-" handleClick={inputAddition} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
