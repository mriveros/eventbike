//while loading show spinner, then once its loaded show the other 
import React from 'react';
import Header from './header';
import ActionBar from './action_bar';
import Details from './details';
import Modal from 'react-modal';

class ShowEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state={modalIsOpen: true}
    this.closeModal = this.closeModal.bind(this);
    
    this.loading = true;
  }
  componentWillMount() {
    this.props.getevent(this.props.eventId);
  }
  componentWillReceiveProps(nextProps) {

    if (!this.props.event || this.props.event.id != nextProps.eventId) {
      this.props.getevent(this.props.eventId);
      this.loading = true
    } else {
      this.loading = false;
    }

  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  isLoading() {
    return (this.props.eventId !== this.props.event.id)
  }

  render() {
    if (this.loading) {
      return (
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className={{
            base: 'loading-modal'
          }}
          overlayClassName={{
            afterOpen: 'loading-modalOverlay_after-open'
          }}
          contentLabel="loading Modal"
        >
          <div className="loader"></div>
          
        </Modal>
      )
    } else {
      const event = this.props.event;
      const id = event.id
      const title = event.title;
      const image_url = event.image_url;
      const day = event.day;
      const month = event.month;
      const location = event.location;
      const details = event.details;
      const creator_name = event.creator_name;
      const attendees = event.attendees;
      return (
        <div className="event-show-container">
          <div className="background-img-container">
            <img className="background-img" src={event.image_url} />
          </div>
          <div className="event-show-content">
          <div id="bg"></div>
            <Header 
                  id={id}
                  title={title} 
                  image_url={image_url} 
                  month={event.fancymonth}
                  creator_name={creator_name}
                  day={event.fancyday}/>
            <ActionBar 
                  event={event}
                  category={event.category} />
            <Details 
              details={details}
              location={location}
              day={day} 
              month={month}
              hour={event.hour}
              minute={event.minute}
              ampm={event.ampm}
              />
            </div>
        </div>
      )
    }
  }
}

export default ShowEvent