//if state has a potential user and the 'new user flag' is up
//pass this component the username and a dispatch action to signup user
import React from 'react'
class SignupForm extends React.Component {
  constructor() {
    super();
    // this.username = props.username
    this.state = ({password: ""});
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    // console.log(e.target.value)
    this.setState({password: e.target.value})
  }
  handleSubmit(e) {
    const user = {username: this.props.username, password: this.state.password}
    this.props.signup(user)
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        Hello new user! Enter a password to get started.
        <input type="password" value={this.state.password} onChange={this.handleChange}/>
        <input type="submit" value="Sign up" />
      </form>
    )
  }
}
export default SignupForm