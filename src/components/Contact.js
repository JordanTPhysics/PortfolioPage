import React, { useState } from "react";

import './styles/Contact.css';




export default function Contact() {


  const [show, setShow] = useState(false);


  const showModal = () => {
    setShow(true);
    console.log(show);
  }

  const hideModal = () => {
    setShow(false);
    console.log(show);
  }

  return (
    <div>
      <button onClick={() => showModal()} className="button"><h3>Get in contact</h3></button>
       {show && <Form/> }    </div>
  )
}


function Form() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
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
    <div className="contact">

    

    <div className='form'>
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
      { !submitted && !pending && <button type="submit">Submit</button>}
      { !submitted && pending && <button type="submit" disabled>please wait...</button>}
      {submitted && <button onClick={() => setSubmitted(false)} className='button'></button> }

    </form>


    
    </section>
    </div>

  </div>
  )
  }





