// import React from "react";
import Calculator from "../components/Calculator";
import Header from "../components/header";
import Result from "../components/Result";

function App() {
  // di useState bisa array destructuring obj
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1500,
    expectedReturn: 5,
    duration: 10,
  });

  function handleUserInput(inputKey, newValue) {
    // buat update dengan
    setUserInput((existingUserInput) => {
      return {
        ...existingUserInput,
        [inputKey]: newValue,
      };
    });
  }
  return (
    // react fragment=>
    <>
      <Header />
      <Calculator onChangeProps={handleUserInput} userInput={userInput} />
      <Result resultInput={resultInput} />
    </>
  );
}

export default App;
