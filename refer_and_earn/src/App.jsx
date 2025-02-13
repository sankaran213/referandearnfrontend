import { useState } from "react";

import "./App.css";
import ReferAndEarn from "./Refer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <ReferAndEarn />
      </div>{" "}
    </>
  );
}

export default App;
