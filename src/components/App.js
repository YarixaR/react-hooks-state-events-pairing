import React from "react";
import video from "../data/video.js";
import Header from "./Header.js";

function App() {


 

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header
      title= { video.title } 
      views= { video.views }
      createdAt= { video.createdAt }
      comments = {video.comments}
      />
    </div>
  );
}

export default App;
