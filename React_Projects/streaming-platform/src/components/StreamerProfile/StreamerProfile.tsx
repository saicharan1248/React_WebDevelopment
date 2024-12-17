import React from "react";
import "./StreamerProfile.css";

interface Streamer {
  bannerUrl: string; // URL for the banner image
  profilePicUrl: string; // URL for the profile picture
  bio: string; // Streamer bio
  followers: number; // Number of followers
  schedule: string; // Live stream schedule
}

const StreamerProfile = () => {
  // Sample streamer data
  const streamer: Streamer = {
    bannerUrl: "https://picsum.photos/800/200?random=1", // Example banner URL
    profilePicUrl:
      "https://www.google.com/imgres?q=profile%20images&imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2F59%2F37%2F5f%2F59375f2046d3b594d59039e8ffbf485a.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Finstagram-dpz-ideos--725712927467208579%2F&docid=cg6lCE2X67NwIM&tbnid=3fLB1k2mcCEgoM&vet=12ahUKEwjW-qKT0q-KAxUG78kDHRR3HNEQM3oECGgQAA..i&w=736&h=736&hcb=2&ved=2ahUKEwjW-qKT0q-KAxUG78kDHRR3HNEQM3oECGgQAA", // Example profile picture URL
    bio: "Gamer and streamer sharing epic moments!",
    followers: 1500,
    schedule: "Every Saturday at 5 PM",
  };

  return (
    <div className="streamer-profile">
      <div className="banner">
        <img src={streamer.bannerUrl} alt="Streamer Banner" />
        <img
          src={streamer.profilePicUrl}
          alt="Profile"
          className="profile-pic"
        />
        <button className="follow-button">Follow</button>
      </div>
      <div className="info-section">
        <p>{streamer.bio}</p>
        <p>Followers: {streamer.followers}</p>
        <p>Live Stream Schedule: {streamer.schedule}</p>
      </div>
      <div className="video-gallery">{/* Video thumbnails go here */}</div>
    </div>
  );
};

export default StreamerProfile;
