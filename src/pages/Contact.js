import React from 'react';
import Bottom from './Bottom';
import '../Contact.css';
import Feed from "../components/ContactFeed";

// function Contact(){
//     return(
//         <div>
//             <h1>What problems do you want to solve?</h1>

//         </div>
//     )
// };

// export default Contact;

import { useState } from 'react';
import NewPost from '../components/ContactNewPost';

function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Use the name and message state variables to update the UI or send the data to the server
  };

  return (
    <div>
        <h1>What problems do you want to solve?</h1>
        <div className='contact-form-container'>
            <div className='contact-form'>
                <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                </label>
                <label>
                    Message:
                    <textarea value={message} onChange={(event) => setMessage(event.target.value)} />
                </label>
                <button type="submit">Submit</button>
                </form>
            </div>
        </div>
        <Feed/>
    </div>
  );
}

export default Contact;
