//This needs to be the show show container with basic information 
import React from 'react';
import { Link } from 'react-router-dom';
import EventsBookmarkContainer from './events_bookmark_container';
import BookmarkBorder from 'material-ui-icons/BookmarkBorder';
import EventsRegisterButton from './events_register_button';

const EventsListItem = ({event, unregister, square, register, bookmark, unbookmark, currentUser}) => {
  // const handleBookmark = (e) => {
  //   e.preventDefault();
  //   bookmark(event.id);
  //   console.log('bookmark')
  // }
  let cardClass; 
  square ? cardClass = "card square" : cardClass = "card";
  const eventShowPath = `events/${event.id}`;
  const categoryGoesHere = "#";
  const categoryPath = `events/${categoryGoesHere}`;
  const bookmarkPath = `events/${event.id}/bookmark`;
  const fillerDateTime = "Sun, Dec 5 6:00 PM";
  const fillerVenue = "San Francisco Track";
  // <li className={itemClass}>
  return (
      <div className={cardClass}>
        <Link to={eventShowPath}>
          <div className="card-top">
            <div className="card-img">
              <img src={event.image_url} />
            </div>
            <span className="card-details">
              <h3>{fillerDateTime}</h3>
              <h2>{event.title}</h2>
              <h4>{fillerVenue}</h4>
            </span>
          </div>
        </Link>
        <div className="card-footer">
          <span className="card-attendees">

          </span>
          <span>
            <Link to={categoryPath}>#{event.category}</Link>
          </span>
          <span className="card-actions">
            <EventsRegisterButton 
                                event={event}
                                register={register}
                                unregister={unregister}
                                currentUser={currentUser}/>
            <EventsBookmarkContainer
                                event={event}/>
          </span>
        </div>
      </div>
  )
}
// </li>
{/* <button onClick={handleBookmark}><BookmarkBorder /></button> */}
{/* <ProtectedRoute path={bookmarkPath} component={EventsBookmarkButton}/> */}
{/* <button onClick={handleRegister}>RegisterIcon</button> */}

export default EventsListItem;