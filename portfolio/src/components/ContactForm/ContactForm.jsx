import React from 'react';

function ContactForm(props) {
  return (
      <div>
        <form>
          <label>Email</label>
          <input name= "email"></input>
          <label>Message</label>
          <input name= "message"></input>
          <button>Submit</button>
        </form>
      </div>
  );
}

export default ContactForm;