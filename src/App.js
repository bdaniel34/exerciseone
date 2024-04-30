import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./List";
import TodoApp from "./TodoApp";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoApp />} />
        <Route path="/List" element={<List />} />
      </Routes>
    </Router>
  );
}
// import React, { useState } from "react";
// import "./App.css"
// export default function App() {
//   const [inputValue, setInputValue] = useState("");
//   const [displayedInfo, setDisplayedInfo] = useState("");

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleEnterClick = () => {
//     setDisplayedInfo(inputValue);
//   };

//   const handleInfoClick = () => {
//     // Handle the click on the displayed info
//     console.log("Info clicked:", displayedInfo);
//   };

//   return (
//     <div >
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder="Enter some information"
//       />
//       <button onClick={handleEnterClick}>Enter</button>
//       <div className="box" onClick={handleInfoClick} style={{ cursor: "pointer" }}>
//         <div id="h1">{displayedInfo}</div>
//       </div>
//     </div>
//   );
// }
