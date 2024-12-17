import React from "react";
import "./VideoPlayer.css";
const VideoPlayer = () => {
  return (
    <div className="video-player-page">
      <video controls className="main-video" />
      <div className="chat-panel">{/* Chat functionality goes here */}</div>
      <div className="engagement-buttons">
        <button>Like</button>
        <button>Share</button>
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
