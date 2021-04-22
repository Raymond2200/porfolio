import React from 'react';

class ContactForm extends React.Component {
  state = {
    email:"",
    message:""
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // 1. POST our new user info to the server
      const fetchResponse = await fetch('/api/contact', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name: this.state.message, email: this.state.email})
      })
    } catch (err) {
      console.log("error", err)
      this.setState({ error: 'Failed - Try Again' });
    }
  }

  render () {
    return (
        <div>
          <form>
            <label>Email</label>
            <input onChange ={this.handleChange} name= "email" value = {this.state.email}></input>
            <label>Message</label>
            <input onChange ={this.handleChange} name= "message" value = {this.state.message}></input>
            <button>Submit</button>
          </form>
        </div>
      );
  } 
}

export default ContactForm;