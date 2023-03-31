import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'

import  { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_94iv0ct', 'template_m8xc4lq', form.current, 'SHKKLePktEygxDExF')
    e.target.reset()
  };
  return (
<section id ='contact'>
  <h2>Contact Me</h2>
  <div className="container contact__container">
   <div className="contact__options">
    <article className="contact__option">
    <MdOutlineEmail className='contact__option-icon'/>

      <h4>Email</h4>
      <h5>dummy@gmail.com</h5>
      <a href="mailto:saba.khalid@triosstudent.com" target="_blank"> Send a message</a>
    </article>

    <article className="contact__option">
      <BsWhatsapp className='contact__option-icon'/>
      <h4>Whatsapp</h4>
      <h5>+123456789</h5>
      <a href="https://api.whatsapp.com/send?phone=+23357233888" target="_blank"> Send a message</a>
    </article>
    <article className="contact__option">
      <RiMessengerLine className='contact__option-icon'/>
      <h4>Messenger</h4>
      <h5>Text Me on Messenger</h5>
      <a href="https://www.messenger.com/" target="_blank"> Send a message</a>
    </article>

  
   </div>
   {/*End of contact Options */}
   <form ref={form} onSubmit={sendEmail}>
    <input type="text" name='name' placeholder='Your Full Name' required />
    <input type="email" name="email" placeholder='Your Email'required />
    <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
    <button type='submit' className='btn btn-primary'>Send Message</button>
   </form>
  </div>
  </section>  )
  
}

export default Contact