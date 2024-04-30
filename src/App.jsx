import Header from "./components/header"
import UserInputs from "./components/UserInputs"
import { useState } from "react";
import Results from "./components/Results";
function App() {

  const[userData , setUserData] = useState({
    initialInvestment: 1000,
    annualInvestment:300,
    expectedReturn: 6,
    duration: 10
});

const inputIsValid = userData.duration >= 1;

function handleValueChange(inputId, newValue){
  setUserData(prevUserData => {
      return{
          ...prevUserData,
          [inputId]: +newValue
      }
  
  });
  };

  
  return (<>
   <Header></Header>
   <UserInputs onChangeValue={handleValueChange} userData={userData}></UserInputs>

{!inputIsValid && <p className="center" style={{color:'#ff2222'}}>Please enter a duration greater than Zero!</p>}

   {inputIsValid && <Results userData={userData}></Results>}
   </>
  )
}

export default App
