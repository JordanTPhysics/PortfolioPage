import React, {useState, useEffect} from 'react';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
function About() {
    return (

    <>
    <h1>This is the about page</h1>
    
        <section id='about' className='container header__container'>
            <h5>Welcome to my website</h5>
            <h1>Jordan Thijssen</h1>
            <div>
        <p>
            Here I would like to present myself
        </p>
        <strong>Links to other platforms:
    <div className="ext">
      <a href="https://github.com/JordanTPhysics"><FaGithub size={30} /></a>
      <a href="https://www.linkedin.com/in/jordan-thijssen-373a431a5/" ><FaLinkedin size={30} /></a>
      </div>
      
       </strong>

    </div>
        </section>

    

    


    </>
        
    );
}

export default About;
