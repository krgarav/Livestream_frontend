import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Live Stream</h1>
        <video controls width="550" height={"600"}>
          <source
            src="/media.mp4"
            type="video/mp4"
          />
          {/* <source src="/media/cc0-videos/flower.mp4" type="video/mp4" /> */}
          {/* Download the
          <a href="/media/cc0-videos/flower.webm">WEBM</a>
          or
          <a href="/media/cc0-videos/flower.mp4">MP4</a>
          video. */}
        </video>
      </div>
    </>
  );
}

export default App;
