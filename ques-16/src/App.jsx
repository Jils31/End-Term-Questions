import { useRef, useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const renderCount = useRef(0)

  useEffect(()=>{
    renderCount.current += 1
  })

  return (
    <>
      <h2>Render Count: {renderCount.current}</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type to re-render"
      />
    </>
  );
}

export default App;
