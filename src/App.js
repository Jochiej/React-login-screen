import React, {useState} from "react";
import { Logincomp } from "./components/login";
import "./App.css";

function App() {
  const [ud, setud] = useState({username:"", password: ""})
  return (
    <div className="container">
      <Logincomp ud={ud} />
    </div>
  );
}
export default App;
