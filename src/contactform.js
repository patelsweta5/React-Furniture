import React, { useState } from 'react';
// import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // const handleSubmit = (e) => {
    //   e.preventDefault();

    //   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
    //     .then((response) => {
    //       console.log('SUCCESS!', response.status, response.text);
    //       alert('Email sent successfully!');
    //     })
    //     .catch((error) => {
    //       console.error('FAILED...', error);
    //       alert('Failed to send email. Please try again later.');
    //     });
    // };

    return (

        <section className="contact-us" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 left-form">
                        <form id="contact" action="" method="post">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-heading">
                                        <h2>Don't be Hesitated<br /><em>Talk to us</em> now!</h2>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <input name="name" type="text" id="name" placeholder="First Name*" required="" />
                                </div>
                                <div className="col-lg-6">
                                    <input name="last-name" type="text" id="last-name" placeholder="Last Name*" required="" />
                                </div>
                                <div className="col-lg-6">
                                    <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required="" />
                                </div>
                                <div className="col-lg-6">
                                    <input name="subject" type="text" id="subject" placeholder="Subject*" required="" />
                                </div>
                                <div className="col-lg-12">
                                    <textarea name="message" type="text" className="form-control" id="message" placeholder="Message" required=""></textarea>
                                </div>
                                <div className="col-lg-12">
                                    <button type="submit" id="form-submit" className="main-button ">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6 right-map">
                        <div id="map">

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" width="100%" height="542px" frameBorder="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ContactForm;
