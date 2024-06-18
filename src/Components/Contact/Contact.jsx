import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='ContactContainer'>
      <h2>Contact Page</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.269102627618!2d87.05768611123162!3d23.23329260834362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7af337e5ea0cb%3A0x83061d6cf3157361!2sNehru%20Park!5e0!3m2!1sen!2sin!4v1718684967442!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="1" loading="fast" style={{ border: 0 }}></iframe>

      <div className="contact-form">
        <form action="https://formspree.io/f/xvoeenlp" method="post" className='contact-form'>
          <input type="text" name="username" id="" placeholder='Username' required autoComplete='off' />
          <input type="email" name="Email" id="" placeholder='Email' required autoComplete='off' />

          <textarea name="message" id="" cols="30" rows="10" required autoComplete='off' placeholder='Enter your message'></textarea>
          <input type="submit" value="send" />
        </form>
      </div>
    </div>
  )
}

export default Contact