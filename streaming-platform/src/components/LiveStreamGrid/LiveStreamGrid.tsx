import React from "react";
import LiveStreamCard from "../LiveStreamCard/LiveStreamCard.tsx";

const LiveStreamGrid = () => {
  // Sample streams data
  const streams = [
    {
      id: 1,
      title: "🎮 Playing Valorant Ranked | Road to Radiant",
      streamer: "ProGamer123",
      thumbnail: "https://picsum.photos/320/180",
      viewers: 1234,
      category: "FPS",
    },
    {
      id: 2,
      title: "🎤 Live Music Jam Session | Chill Vibes",
      streamer: "MusicLover88",
      thumbnail: "https://picsum.photos/320/180?random=1",
      viewers: 567,
      category: "Music",
    },
    {
      id: 3,
      title: "🏎️ Racing Through the Streets | Need for Speed",
      streamer: "SpeedDemon",
      thumbnail: "https://picsum.photos/320/180?random=2",
      viewers: 890,
      category: "Racing",
    },
    {
      id: 4,
      title: "🧙‍♂️ Epic Fantasy Adventure | Quest for Glory",
      streamer: "FantasyFanatic",
      thumbnail: "https://picsum.photos/320/180?random=3",
      viewers: 432,
      category: "Adventure",
    },
    {
      id: 5,
      title: "🧩 Puzzle Challenge | Can You Solve It?",
      streamer: "PuzzleMaster",
      thumbnail: "https://picsum.photos/320/180?random=4",
      viewers: 321,
      category: "Puzzle",
    },
    {
      id: 6,
      title: "👾 Retro Gaming Night | Classic Hits",
      streamer: "RetroGamer",
      thumbnail: "https://picsum.photos/320/180?random=5",
      viewers: 654,
      category: "Retro",
    },
  ];

  return (
    <div className="live-stream-grid">
      {streams.map((stream) => (
        <LiveStreamCard stream={stream} /> // Removed key prop
      ))}
    </div>
  );
};

export default LiveStreamGrid;
