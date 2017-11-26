import React from 'react';
import Done from 'material-ui-icons/Done';
import { ProtectedFunction } from '../../util/route_util';
import EventsSigninModal from './events_signin_modal';
import { flashMessage } from 'redux-flash';

class EventsRegisterButton extends React.Component {
  constructor(props){
    super(props)
    // debugger
    this.userIsRegistered = this.userIsRegistered.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);
    this.showModal = true;    
  }
  userIsRegistered() {

    if (this.props.currentUser &&
        this.props
        .currentUser
        .attending_events
        .indexOf(this.props.event.id) >= 0) {
      return true;
    } else {
      return false;
    }
  }

  handleRegistration(e) {
    e.preventDefault();
    //logic here to make sure there is a logged in user 
    if (this.props.currentUser) {
      switch(this.userIsRegistered()) {
        case false:
          this.props
            .register(this.props.event.id, this.props.currentUser.id); 
          return
        case true:
          this.props.unregister(this.props.event.id, this.props.currentUser.id); 
          return 
      }
    } else {
      // render modal 
      // console.log()
      dispatch(flashMessage('You must be logged in to register'))
      // console.log(this.showModal)
      // this.showModal = false;

    }
    // console.log('Register')
  }

  render() {
    let myClass
    this.userIsRegistered() ? myClass="active" : myClass = "";
    // let myTest = this.showModal ? "true" : null
    // console.log("test", myTest)
    // debugger
    return (
      <span>
        <button className={myClass} onClick={this.handleRegistration}><Done /></button>
      </span>
    )
  }
}

export default EventsRegisterButton;