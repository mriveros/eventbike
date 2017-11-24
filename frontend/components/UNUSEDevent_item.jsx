import React from 'react';



const EventItem = ({event}) => {
  return (
    <div>
      {event.title}
      <button onClick={event.register}>Register</button>
      <button onClick={event.bookmark}>Bookmark</button>
    </div>
  )
}

export default EventItem;