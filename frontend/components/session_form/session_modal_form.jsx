import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Link } from 'react-router-dom'
import SignupForm from './signup_form'
import LoginForm from './login_form'
import SigninForm from './signin_form'
// import SessionFormContainer from './session_form_container'

//https://github.com/reactjs/react-modal
// const customStyles = {
//   content : {
//     top                   : '50%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     marginRight           : '0%',
//     transform             : 'translate(-50%, -50%)'
//   }
// };

class SessionModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: true,
      formType: "signin"
    };
    this.errors = props.errors
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.determineFormType = this.determineFormType.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.props.reseterrors();
    this.props.history.push('/')
    this.setState({modalIsOpen: false});
  }
  componentDidMount() {
    
  }
  componentWillReceiveProps(nextProps) {
    //We received a new potential user, determine the correct form type to show
    if (nextProps.potentialUser !== this.props.potentialUser) {
      this.determineFormType(nextProps);
    }
  }
  determineFormType(nextProps) {
    //Set the form based on the current session data 
    if (nextProps.potentialUser === null) {
      this.setState({formType: 'signin'})
      return 
    } else if (nextProps.newUserFlag) {
      this.props.history.push('/signin/signup')      
      this.setState({formType: 'signup'})
      return 
    } else {
      this.props.history.push('/signin/login')        
      this.setState({formType: 'login'})
      return 
    }
  }
  render() {
    let formToShow;
    //Render the appropriate form based on the formTYpe
    if (this.state.formType === 'signup') {
      formToShow = <SignupForm 
      username={this.props.potentialUser} 
      history={this.props.history} 
      signup={this.props.signup} 
      reset={this.props.reset}  
      errors={this.props.errors} />     
    } else if (this.state.formType === 'login') {
      formToShow = <LoginForm 
      username={this.props.potentialUser} 
      history={this.props.history} 
      login={this.props.login} 
      reset={this.props.reset}
      errors={this.props.errors} />
    } else {
      formToShow = <SigninForm lookup={this.props.lookup} errors={this.props.errors}/>
    }
    return (
      <div>

        <Modal 
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className={{
            base: 'modal',
            afterOpen: 'modal_after-open',
            beforeClose: 'modal_before-close'
          }}
          overlayClassName={{
            base: 'modalOverlay',
            afterOpen: 'modalOverlay_after-open',
            beforeClose: 'modalOverlay_before-close'
          }}
          contentLabel="Sign In Modal"
        >
        <div className="closeButton"> 
          <Link to="/" className="closeButton">&times;</Link>
        </div>
        <div className="modalForm">
          {formToShow}
        </div>
        </Modal>
      </div>
    );
  }
}
export default SessionModalForm;