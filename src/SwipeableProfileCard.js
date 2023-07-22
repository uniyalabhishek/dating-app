// src/SwipeableProfileCard.js
import React from 'react';
import { Card, CardContent, Typography, Box, CardMedia } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';

function SwipeableProfileCard({ profile, onAccept, onReject }) {
  const [{ x }, set] = useSpring(() => ({ x: 0 }));
  const bind = useDrag(({ movement: [mx], down, direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2;
    const dir = xDir < 0 ? -1 : 1;
    if (!down && trigger) dir === -1 ? onReject() : onAccept();
    set({ x: down ? mx : 0 });
  });

  return (
    <animated.div {...bind()} style={{ x, display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ margin: '1rem', maxWidth: 345, height: 500 }}>
        <CardMedia
          component="img"
          height="250"
          image="https://dl.openseauserdata.com/cache/originImage/files/d4927fd255cf8adc2f79916f6d9212e0.png"
          alt="Profile"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            <Box sx={{ textDecoration: 'none' }}>
              {profile.name}, {profile.age}
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
    </animated.div>
  );
}

export default SwipeableProfileCard;
