import React, { useState } from "react";
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import './styles/Contact.css';







function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('your');
  const [email, setEmail] = useState('momma');
  const [message, setMessage] = useState('sun');
  const [pending, setIsPending] = useState(false);


  const handleSubmit = (e) => { 
    e.preventDefault();
    const timestamp = new Date(Date.now())
    const PostObject = {name, email, message, timestamp};

    console.log(PostObject)
    
 setIsPending(true);

    fetch('http://localhost:3000/comments',{
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(PostObject)
    }).then(() => {
      console.log('message sent')
      setIsPending(false);
    })
  }

  return (
    <section id='contact'>
        <h1>This is the contact page</h1>
        <form
        onSubmit={handleSubmit}>
      <div>
        <input 
        type="text" 
        placeholder="Your name" 
        name="name" 
        value={name}
        onChange={(e) =>setName(e.target.value)}
        required />
      </div>
      <div>
        <input 
        type="email" 
        placeholder="Email" 
        name="email" 
        value={email}
        onChange={(e) =>setEmail(e.target.value)}
        required />
      </div>
      <div>
        <textarea 
        placeholder="Your message" 
        name="message" 
        value={message}
        onChange={(e) =>setMessage(e.target.value)}
        required />
      </div>
      { !submitted && !pending && <button type="submit">Send message</button>}
      { !submitted && pending && <button type="submit" disabled>please wait...</button>}
      {submitted && <button onClick={() => setSubmitted(false)}></button> }

    </form>

    </section>
  )
  }


export default Contact;






