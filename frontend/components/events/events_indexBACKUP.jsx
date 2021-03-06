import React from 'react';
// import EventsListItem from './events_list_item';
import EventsShowContainer from './events_show_container';
class EventsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.loading = true;
    this.state={events: {}}
  }
  componentWillMount() {
    setTimeout(this.props.getevents, 0); //artificial delay
    //spinner now 
  }
  componentWillReceiveProps(nextProps) {
    const events = nextProps.events
    this.loading = false;
    this.setState({events});
  }
  render() {
    let myClass;
    // let myClass2;
    this.loading ? (myClass = "loader") : (myClass = "showEvents");
    // this.props.squares ? myClass2="events-list squares" : myClass2="events-list";
    //if coming in from the show page, the array is coming in.
    let eventsList = this.props.events.map((event) => {
      return <EventsShowContainer key={event.id} event={event} />
    })
    return (
      <div className="events-index-container">
        <h1>Cycling events in San Francisco, California</h1>
        <div className={myClass}></div>
          {eventsList}
      </div>  
    )
  }
}


export default EventsIndex;