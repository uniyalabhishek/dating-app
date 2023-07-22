// src/ProfileCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Box } from '@mui/material';

function ProfileCard({ profile }) {
  return (
    <Card sx={{ margin: '1rem', padding: '1rem' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          <Box component={Link} to={`/profile/${profile.id}`} sx={{ textDecoration: 'none' }}>
            {profile.name}
          </Box>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {profile.bio}
        </Typography>
        <ul>
          {profile.attestations.map((attestation, index) => (
            <li key={index}>{attestation}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default ProfileCard;
