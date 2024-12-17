import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./LiveStreamCard.css";

interface Stream {
  id: number;
  title: string;
  streamer: string;
  thumbnail: string;
  viewers: number;
  category: string;
}

interface LiveStreamCardProps {
  stream?: Stream;
}
interface Stream {
  id: number;
  title: string;
  streamer: string;
  thumbnail: string;
  viewers: number;
  category: string;
}

const DEMO_STREAMS: Stream[] = [
  {
    id: 1,
    title: "🎮 Playing Valorant Ranked | Road to Radiant",
    streamer: "ProGamer123",
    thumbnail: "https://picsum.photos/320/180",
    viewers: 1234,
    category: "FPS",
  },
];
const LiveStreamCard = ({ stream = DEMO_STREAMS[0] }: LiveStreamCardProps) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleHover = () => {
      gsap.to(card, {
        scale: 1.05,
        boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
        duration: 0.2,
      });
    };

    const handleLeave = () => {
      gsap.to(card, {
        scale: 1,
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        duration: 0.2,
      });
    };

    card.addEventListener("mouseenter", handleHover);
    card.addEventListener("mouseleave", handleLeave);

    return () => {
      card.removeEventListener("mouseenter", handleHover);
      card.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="live-stream-card" ref={cardRef}>
      <div className="thumbnail-container">
        <img src={stream.thumbnail} alt={stream.title} className="thumbnail" />
        <div className="live-badge">LIVE</div>
        <div className="viewer-count">
          <span className="dot">●</span>
          {stream.viewers.toLocaleString()} watching
        </div>
      </div>

      <div className="stream-info">
        <h3 className="stream-title">{stream.title}</h3>
        <p className="streamer-name">{stream.streamer}</p>
        <span className="stream-category">{stream.category}</span>
      </div>
    </div>
  );
};

export default LiveStreamCard;
