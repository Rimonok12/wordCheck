import "./App.css";

import JSONDATA from "./MOCK_DATA.json";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      {JSONDATA.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (
          val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
      })
        .sort()
        .map((val, key) => {
          return (
            <div className="user" key={key}>
              {/* <h2>{val.title}</h2> */}
              <p>{val.first_name}</p>
            </div>
          );
        })}
    </div>
  );
}

export default App;
