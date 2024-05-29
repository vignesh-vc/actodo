// src/components/LiveDateCard.js
import React, { useState, useEffect } from 'react';
import Card from './Card';

const LiveDateCard = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return <Card bgcolor={"#4CAF50"} title={formattedDate} subtitle={"Live Date"} />;
}

export default LiveDateCard;
