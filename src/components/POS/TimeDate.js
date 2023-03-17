import React, { useState, useEffect } from 'react';

function TimeDate() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  };

  return (
    <div>
      <h2>{time.toLocaleString('PH', options)}</h2>
    </div>
  );
}

export default TimeDate;