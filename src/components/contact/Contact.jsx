import React, {useRef} from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y0s6w6f', 'template_xg8b0an', form.current, 'vHBnv1x7ksE6Q4gdg')
      .then((result) => {
          console.log(result.text);
          console.log("Message sent")
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Contact Details</h3>
          <p className="conatct__details">
            Phone Number:
            <br></br>
            9900667492
            <br></br>
            Email:
            <br></br>
            amishaprakash18@gmail.com 
            <br></br>
            LinkedIn:
            <br></br>
            <a href="https://www.linkedin.com/in/amisha-prakash/" target='_blank'>
              <i className='icon-social-linkedin'></i>
            </a>
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail} action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" name="from_name" className="contact__form-input" placeholder='Enter name'/>
            </div>

            <div className="contact__form-div">
              <input type="email" name="from_email" className="contact__form-input" placeholder='Enter email'/>
            </div>

            {/* <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Enter subject'/>
            </div> */}
            </div>

            <div className="contact__form-div" contact__form-area>
              <textarea name="message" id="" cols="30" rows="10" className='contact__form-input' placeholder='Write your message'></textarea>
            </div>

          
            <button value="Send" className='btn'>Send Message</button>

        </form>
      </div>
    </section>
   
  )
}

export default Contact