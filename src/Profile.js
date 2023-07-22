// src/Profile.js
import React from 'react';
import { useParams } from 'react-router-dom';

function Profile() {
  const { id } = useParams(); // Gets the ID from the URL

  return <div>Profile {id}</div>;
}

export default Profile;
