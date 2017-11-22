import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import UsernameForm from './username_form'
import { Link } from 'react-router-dom'
import SignupForm from './signup_form'
import LoginForm from './login_form'
import UsernameFormSimple from './username_form_simple'
// import SessionFormContainer from './session_form_container'

//https://github.com/reactjs/react-modal
const customStyles = {
  content : {
    top                   : '0%',
    left                  : '0%',
    right                 : '0%',
    bottom                : '0%',
    marginRight           : '0%',
    transform             : 'translate(-0%, -0%)'
  }
};

class SessionModalForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.loc)
    // debugger
    // this.currentUser = props.currentUser;
    // this.logout = props.logout;
    this.state = {
      modalIsOpen: true
    };
    this.errors = props.errors
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {

    this.setState({modalIsOpen: false});
  }
  render() {
    console.log("p user", this.props.potentialUser)
    let formToShow;
    if (this.props.potentialUser === null){
      formToShow = <UsernameFormSimple lookup={this.props.lookup}/>
    } else if(this.props.newUserFlag) {
      formToShow = <SignupForm username={this.props.potentialUser} signup={this.props.signup} />
    } else {
      formToShow = <LoginForm username={this.props.potentialUser} login={this.props.login} />
    }
    // const formToShow = (this.props.potentialUser === null) ? "Show username form" : "Show password form"
    return (
      <div>
        {/* This button is either going to be sign in or log out  */}
        {/* <button className="btn btn-default" onClick={this.openModal}>Sign In</button> */}
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Sign In Modal"
        >
        {/*modal is now open, show enter user name OR enter password*/}
          {/* if this.state.potentialUser then render the Password form instead */}

          <Link to="/">Close</Link>
          {formToShow}
          
        </Modal>
      </div>
    );
  }
}
{/* <UsernameForm errors={this.errors} lookup={this.props.lookup} history={this.props.history} signup={this.props.signup} login={this.props.login}/> */}


// ReactDOM.render(<App />, appElement);
export default SessionModalForm;