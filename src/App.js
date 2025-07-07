import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];


export default function App() {
  const [step , setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true);
  
  function handleNext() {
    if(step >= messages.length) {
      alert("You have completed all steps!");
    }
   setStep(step + 1);
  }
  function handlePrevious() {
    if(step <= 1) {
      return;
    }
   setStep(step - 1);
  }
  return (
<>

  <button className="close" onClick={()=> setIsOpen(!isOpen)} >&times;</button>

  {isOpen &&
    <div className="steps">
      <div className="numbers">
     <div className={`${step >= 1? "active" : ""}`}>1</div>
     <div className={`${step >= 2? "active" : ""}`}>2</div>
     <div className={`${step >= 3? "active" : ""}`}>3</div>  
     <p>{`$5 days ${new Date().toLocaleString()}`}</p> 
     </div>

<p className="message">Step {step}: {messages[step-1]}</p>
     <div className="buttons">
      <button onClick={handlePrevious} style={{backgroundColor: "#7950f2" , color: "#fff"}}>
        Previous</button>
      <button onClick={ handleNext} style={{backgroundColor: "#7950f2" , color: "#fff"}}>
        Next</button>
     </div>
    </div>
}</>

)
}