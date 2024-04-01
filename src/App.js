import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React,{useState} from "react";

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
    }
    else{
      setMode("light");
      document.body.style.backgroundColor =  "white";
      showAlert("Light mode is enabled","success");
    }
  }
  return (
    <>
      <Navbar title={"TextUtils"} about={"About"} mode={mode} toggleMode={toggleMode}/>

      <Alert alert={alert}/>
      
      <div className="container my-3">
      <TextForm heading="Enter the text analyze below" mode={mode} showAlert={showAlert}/>
      </div>
      {/* <About /> */}
      
    </>
  );
}

export default App;
