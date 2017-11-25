import React from 'react';
import EventsListItem from './events_list_item';
class EventsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.loading = true; //0: loading
    this.state={events: {}}
  }
  componentDidMount() {
    // console.log(this.props.getevents)
    setTimeout(this.props.getevents, 0); //artificial delay
    //spinner now 
  }
  componentWillReceiveProps(nextProps) {
    const events = nextProps.events
    this.loading = false;
    this.setState({events});
  }
  render() {
    // console.log(this.state.events)
    let myClass
    this.loading ? (myClass = "loader") : (myClass = "showEvents")
    let eventsList = this.props.events.map((event) => {
      return <EventsListItem 
                key={event.title} 
                event={event} 
                register={this.props.register}
                bookmark={this.props.bookmark}/>
    })
    return (
      <div className="events-index-container">
        <h1>Cycling events in San Francisco, California</h1>
        <div className={myClass}></div>
        <ul>
          {eventsList}
        </ul>
      </div>  
    )
  }
}

export default EventsIndex;