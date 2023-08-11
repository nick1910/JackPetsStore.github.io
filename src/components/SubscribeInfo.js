import React, { useState, useEffect } from 'react';

function SubscribeInfo() {
  const [encouragement, setEncouragement] = useState('');

  useEffect(() => {
    fetch('../Data/Encouragement.json')
      .then(response => response.json())
      .then(data => {
        setEncouragement(data.encouragement);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>SUBSCRIBE</h2>
      <p>{encouragement}</p>
    </div>
  );
}

export default SubscribeInfo;
