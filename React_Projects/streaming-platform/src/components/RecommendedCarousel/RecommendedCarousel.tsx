import React from "react";
import "./RecommendedCarousel.css";

interface Stream {
  id: number;
  title: string;
  streamer: string;
  thumbnail: string;
}

const RecommendedCarousel = () => {
  // Sample recommended streams data
  const recommendedStreams: Stream[] = [
    {
      id: 1,
      title: "🎮 Epic Gaming Moments",
      streamer: "GamerGuy",
      thumbnail: "https://picsum.photos/320/180?random=1",
    },
    {
      id: 2,
      title: "🎤 Live Music Performance",
      streamer: "MusicStar",
      thumbnail: "https://picsum.photos/320/180?random=2",
    },
    {
      id: 3,
      title: "🏎️ Racing Championship Highlights",
      streamer: "Speedster",
      thumbnail: "https://picsum.photos/320/180?random=3",
    },
    {
      id: 4,
      title: "🧙‍♂️ Fantasy Adventure Gameplay",
      streamer: "FantasyFan",
      thumbnail: "https://picsum.photos/320/180?random=4",
    },
  ];

  return (
    <div className="recommended-carousel">
      <h2>Recommended Streams</h2>
      <div className="carousel-container">
        {recommendedStreams.map((stream) => (
          <div className="carousel-item" key={stream.id}>
            <img
              src={stream.thumbnail}
              alt={stream.title}
              className="thumbnail"
            />
            <h3 className="stream-title">{stream.title}</h3>
            <p className="streamer-name">{stream.streamer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedCarousel;
