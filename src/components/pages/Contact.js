import React from 'react';
import Navbar from '../Navbar/Navbar';

function Contact() {
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: 'center' }}>Contact</h1>
      <div className="dd">
        <div className="info">
          <div>
            <i className="fa-solid fa-location-dot"></i> &nbsp;<span>Address:</span> <br /> Jordan, Amman
          </div>
          <div>
            <i className="fa-solid fa-phone"></i> &nbsp; <span>Call Us:</span> <br /> +962796411533
          </div>
          <div>
            <i className="fa-solid fa-envelope"></i>&nbsp; &nbsp;<span>Email Us:</span> <br /> nadeenqadoomi11@gmail.com
          </div>
        </div>
        <form className="actions" action="#" method="post">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" rows="5" placeholder="Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;