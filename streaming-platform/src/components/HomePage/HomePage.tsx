import React from "react";
import Header from "../Header/Header.tsx";
import LiveStreamGrid from "../LiveStreamGrid/LiveStreamGrid.tsx";
import RecommendedCarousel from "../RecommendedCarousel/RecommendedCarousel.tsx";
import NavigationMenu from "../NavigationMenu/NavigationMenu.tsx";
import StreamerProfile from "../StreamerProfile/StreamerProfile.tsx";
import VideoPlayer from "../VideoPlayer/VideoPlayer.tsx";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <Header />
        <div className="content">
          <NavigationMenu />
          <LiveStreamGrid /> <StreamerProfile />
        </div>
        <RecommendedCarousel />
      </div>
      <VideoPlayer />
    </>
  );
};

export default HomePage; // Ensure this line is present
