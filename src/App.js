import { createContext, useState } from "react";
import Xmodal from "./xmodal";


// Create context


function App() {
  const [inputValue, setInputValue] = useState("");

  

  return (
    
      <div className="App">
        <Xmodal />
        {/* <ResultList /> */}
      </div>
    // </InputContext.Provider>
  );
}

export default App;