// src/Home.js
import React, { useState } from 'react';
import profiles from './profiles';
import SwipeableProfileCard from './SwipeableProfileCard';

function Home() {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  const handleAccept = () => {
    setCurrentProfileIndex((prevIndex) => prevIndex + 1);
  };

  const handleReject = () => {
    setCurrentProfileIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div>
      {currentProfileIndex < profiles.length ? (
        <SwipeableProfileCard
          profile={profiles[currentProfileIndex]}
          onAccept={handleAccept}
          onReject={handleReject}
        />
      ) : (
        <p>No more profiles</p>
      )}
    </div>
  );
}

export default Home;
