import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Link } from 'react-router-dom'
import SignupForm from './signup_form'
import LoginForm from './login_form'
import UsernameFormSimple from './username_form_simple'
// import SessionFormContainer from './session_form_container'

//https://github.com/reactjs/react-modal
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '0%',
    transform             : 'translate(-50%, -50%)'
  }
};

class SessionModalForm extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props.loc)
    // debugger
    // this.currentUser = props.currentUser;
    // this.logout = props.logout;
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
    this.props.history.push('/')
    this.setState({modalIsOpen: false});
  }
  componentDidMount() {
    
  }
  // componentWillReceiveProps(nextProps) {
  //   // console.log("receive",nextProps)
  //   if (this.props.potentialUser !== nextProps.potentialUser) {
  //     if (nextProps.newUserFlag === true) {
  //       this.props.history.push('/signin/signup')
  //       this.setState({formType: 'signup'})
  //     } else if (nextProps.potentialUser !== null) {
  //       // console.log(this.props)
  //       // console.log('there')
  //       this.props.history.push('/signin/login')        
  //       this.setState({formType: 'login'})
  //     } else {
  //       // console.log('here')
  //       this.setState({formType: 'username'})
  //     }
  //   }
  // }
  componentWillReceiveProps(nextProps) {
    // console.log("receive",nextProps)
    // if (this.props.potentialUser !== nextProps.potentialUser) {
    //   if (nextProps.newUserFlag === true) {
    //     this.props.history.push('/signin/signup')
    //     this.setState({formType: 'signup'})
    //   } else if (nextProps.potentialUser !== null) {
    //     // console.log(this.props)
    //     // console.log('there')
    //     this.props.history.push('/signin/login')        
    //     this.setState({formType: 'login'})
    //   } else {
    //     // console.log('here')
    //     this.setState({formType: 'username'})
    //   }
    // }
    //username form 
    if (nextProps.potentialUser !== this.props.potentialUser) {
      this.determineFormType(nextProps);
    }
  }
  determineFormType(nextProps) {
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
    // console.log("p user", this.props.potentialUser)
    let formToShow;
    // if (this.props.potentialUser === null){
    //   formToShow = <UsernameFormSimple lookup={this.props.lookup}/>
    // } else if(this.props.newUserFlag) {
    //   formToShow = <SignupForm username={this.props.potentialUser} history={this.props.history} signup={this.props.signup} reset={this.props.reset} />
    // } else {
    //   formToShow = <LoginForm username={this.props.potentialUser} history={this.props.history} login={this.props.login} reset={this.props.reset} />
    // }

    if (this.state.formType === 'signup') {
      formToShow = <SignupForm username={this.props.potentialUser} history={this.props.history} signup={this.props.signup} reset={this.props.reset} />     
    } else if (this.state.formType === 'login') {
      formToShow = <LoginForm username={this.props.potentialUser} history={this.props.history} login={this.props.login} reset={this.props.reset} />
    } else {
      formToShow = <UsernameFormSimple lookup={this.props.lookup}/>
    }
    // }
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