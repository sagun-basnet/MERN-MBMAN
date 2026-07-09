import { useEffect, useState } from "react";
import HeroSection from "./components/home/HeroSection";
import Navbar from "./Navbar";
import HomePage from "./pages/HomePage";

// const add = (a, b) =>{

// }

// add(12,34)

const App = () => {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  // const name = "";
  const handleAdd = () => {
    setCount(count + 1);
    setCount((prev) => prev + 1);
    console.log(count);
  };

  // useEffect(() => {
  //   console.log("Use Effect");
  // }, [count, a, b]);

  return (
    <>
      <Navbar />

      {/* <div className="flex flex-col justify-center items-center"> */}
      {/* <span>{count}</span>
        <button onClick={handleAdd} className="bg-blue-500">
          Add
        </button> */}

      {/* <div className="flex">
          <button
            onClick={() => {
              setIsOpen(true);
            }}
            className="bg-blue-500"
          >
            Open
          </button>
          <button
            onClick={() => {
              setIsOpen(false);
            }}
            className="bg-blue-500"
          >
            close
          </button>
        </div>
        {isOpen && <div className="h-30 w-30 border-2"></div>} */}

      {/* <button onClick={()=> handleAdd(12)} className="bg-blue-500">
          Add
        </button> */}
      {/* </div> */}

      {/* <Navbar username={name} />
      <HomePage /> */}
    </>
  );
};

export default App;
