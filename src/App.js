import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React,{useState} from "react";
import { BrowserRouter as Router,
Routes,
Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");   //wether dark mode enable or not
  
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      },1500);
  }

  const toggleMode = () => {
    if(mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode is enabled","success");
      // document.title = 'Text Editor - Dark Mode';
    }
    else{
      setMode("light");
      document.body.style.backgroundColor =  "white";
      showAlert("Light mode is enabled","success");
      // document.title = 'Text Editor - Light Mode';
    }
  }
  return (
       
      <>
      <Router> 
      <Navbar title={"TextEditor"} about={"About"} mode={mode} toggleMode={toggleMode}/>

      <Alert alert={alert}/>
      
      <div className="container my-3">
        <Routes>
          <Route exact path="/About" element={<About mode={mode}/>}></Route>
          <Route exact path="/" element={<TextForm heading="Try TextEditor - word counter, character counter, Remove extra spaces" mode={mode} showAlert={showAlert}/>}></Route>
        </Routes>
      
      </div>
      
      </Router>
    </>
    
  );
}

export default App;
