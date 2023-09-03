import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './style.css';


const ContectMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_kjlolqc', 'template_v04vpz4', form.current, 'ODUJbt7tqPejwdInH')
        .then((result) => {
            alert(result.text +"message sent successfuly");
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
  return (
    <div>
        <section>
            <div className='inner'>
                <h2 className='text-center'>Contect me</h2>

                <form ref={form} onSubmit={sendEmail} className='form-control'>
                    <label className='lbl'>Name:</label>
                    <input type='text' placeholder='Full Name' name='user_name' className='inp' required/>
                    <label className='lbl'>Email:</label>
                    <input type='email' placeholder='Enter Email address' name='user_email' className='inp' required/>
                    <label className='lbl'>Subject:</label>
                    <input type='text' placeholder='Subject' name='subject' className='inp' required/>
                    <label className='lbl'>Message:</label>
                    <textarea  name="message" cols='25' rows='5' className='txtarea'></textarea>
                    <button type="submit" className='btn-primary  btn'>Send Message</button>
                </form>
            </div>
            <div className='map'>
                <h1>My Location</h1>
                <iframe
                     title="Google Map Location"
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2047.0286339317615!2d76.71321279480517!3d30.728365211320398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefd600813def%3A0xbffb4b33c1dc0f2b!2sKK%20GARMENTS%20MOHALI%20WHOLESALE!5e0!3m2!1sen!2sin!4v1693414722857!5m2!1sen!2sin"
                     frameBorder="0"
                     style={{ border: 0 }}
                     allowFullScreen=""
                     loading="lazy"
                     referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
        </section>
    </div>
  )
}

export default ContectMe