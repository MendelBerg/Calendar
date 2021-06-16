import React, { useState } from 'react';

import { fetchEvents } from '../../gateway/events.js';

const Events = () => {
  const [events, setEvents] = useState(null);

  fetchEvents().then(response => {
    setEvents(response);
  });

  return <div></div>;
};

export default Events;
