import * as EventsAPIUtil from '../util/events_api_util'

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
// export const REGISTER_EVENT = "REGISTER_EVENT";


export const receiveEvents = (events) => {
  return ({
    type: RECEIVE_EVENTS,
    events
  })
}
export const receiveEvent = (event) => {
  console.log("event received",event)
  return ({
    type: RECEIVE_EVENT,
    event
  })
}
//registration should have a userid and eventid
//registration: {user_id: x, event_id: y}
// export const receiveRegistration = (registration) => {
//   return ({
//     type: REGISTER_EVENT,
//     registration 
//   })
// }

//untested
export const receiveErrors = (errors) => {
  // console.log('receivedL', errors)
  return ({
    type: RECEIVE_ERRORS,
    errors
  })
}

export const getEvents = () => dispatch => ( 
  EventsAPIUtil.fetchEvents()
  .then(res => (
    dispatch(receiveEvents(res))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const getEvent = (eventId) => dispatch => (
  EventsAPIUtil.fetchEvent(eventId)
    .then(res => (
      dispatch(receiveEvent(res))
    ))
);


export const requestRegistration = (eventId, userId) => dispatch => (
  EventsAPIUtil.postRegistration(eventId, userId)
    .then(res => (
      dispatch(receiveEvent(res))
    ))
);