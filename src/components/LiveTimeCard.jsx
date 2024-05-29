// src/components/LiveTimeCard.js
import React, { useState, useEffect } from 'react';
import Card from './Card';

const LiveTimeCard = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <Card bgcolor={"#FD6663"} title={time.toLocaleTimeString()} subtitle={"Live Time"} />;
}

export default LiveTimeCard;
