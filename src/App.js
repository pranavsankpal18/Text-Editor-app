import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <Navbar title={"TextUtils"} about={"About"} />
      {/* <Navbar /> */}
      <div className="container my-3">
      <TextForm heading="Enter the text analyze below" />
      </div>
      {/* <About /> */}
      
    </>
  );
}

export default App;
