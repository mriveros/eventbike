//This needs to be the show show container with basic information 
import React from 'react';
import { Link } from 'react-router-dom';
import EventsBookmarkContainer from './events_bookmark_container';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Done from 'material-ui-icons/Done';
import EventsRegisterContainer from './events_register_container';
import DeleteEventModal from './delete_event_modal';
const EventsListItem = ({event, square, currentUser}) => {

  let cardClass; 
  square ? cardClass = "card square" : cardClass = "card long";
  const eventShowPath = `/events/${event.id}`;
  const userEventPath = currentUser ? `/users/${currentUser.id}/tickets` : "/";
  const categoryPath = `/categories/${event.category}`;
  const bookmarkPath = `events/${event.id}/bookmark`;

  return (
      <div className={cardClass}>
          {currentUser && event.creator === currentUser.id &&
            <div className="delete-event">
              <DeleteEventModal currentUser={currentUser} event={event} />
            </div>
          }
        <Link to={eventShowPath}>
          <div className="card-top">
            {event.registered &&
              <div className="starburst checkmark" id="user-registered-checkmark">
                <Done />
              </div>
            }
            <div className="card-img">
              <img src={event.image_url} />
            </div>
            <div className="card-details">
              <h3>{event.wordmonth}, {event.day}</h3>
              <h2>{event.title}</h2>
              <h4>{event.location}</h4>
            </div>
          </div>
        </Link>
        <div className="card-footer">
          <span>
            <Link to={categoryPath}>{event.category}</Link>
          </span>
          <span className="card-attendees">
            <AccountCircle />{event.attendees}
          </span>
          <span className="card-actions">
            {/* <EventsRegisterContainer
                                event={event}/> */}
            <EventsBookmarkContainer
                                event={event}/>
          </span>
        </div>
      </div>
  )
}


export default EventsListItem;