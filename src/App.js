import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";

import "./App.css";

function App() {

  const [alert, setAlert] = useState("null");
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => { 
      setAlert(null);
    }, 1500);
  }
  return (
    <div className="App">
      <Alert alert={alert} />

      <TextForm heading="Text Analyzer" showAlert={showAlert} />
    </div>
  );
}

export default App;
