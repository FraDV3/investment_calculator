import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultsTable from "./components/ResultsTable";
import { useState } from "react";;

function handleUserInput() {
  // This function will handle user input changes
  // It will update the state with the new values
  // For now, it does nothing but can be implemented later

}

function App() {
  const [results, setResults] = useState([]);
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={setUserInput} />
      <ResultsTable />
    </>
  );
}

export default App;
