import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import ResultsTable from "./components/ResultsTable.jsx";
import { useState } from "react";

function App() {
  const [results, setResults] = useState([]);
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1

  function handleUserInput(inputIdentifier, newValue) {
    // This function will handle user input changes
    // It will update the state with the new values
    // For now, it does nothing but can be implemented later
    setUserInput((prevInput) => {
      return { ...prevInput, [inputIdentifier]: +newValue };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleUserInput} />
      {!inputIsValid && <p className="center">Please enter a valid duration.</p>}
      {inputIsValid && <ResultsTable userInput={userInput} />}
    </>
  );
}

export default App;
