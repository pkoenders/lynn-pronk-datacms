import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import contactStyles from './contact.module.scss'
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';


const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    fetch(`./contact-success`)
      .then(resp => {
        window.location = "./contact-success";
      });
  }


  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Contact me</title>
        <meta name="description" content="Contact page. I would love to be contacted to discuss work commissions or just hear your thoughts and ideas. I will always reply. Please complete the form." />
      </Helmet>

      <Layout>

        <div className={contactStyles.contactFormWrapper}>
          <h2>Thanks for visiting my gallery!</h2>
          <div className={contactStyles.contactForm}>

            <p>I would love to be contacted to discuss work commissions or just hear your thoughts and ideas. I will always reply.</p>


            <p>You can call me on <a href="tel:+64 27 4583 948">+64 27 4583 948</a> or <a href="tel:+64 9 3784 087">+64 9 3784 087</a>. Alternatively, complete the form for email enquires. Thank you.</p>
            <div className={contactStyles.contactFormInput}>
              <form
                name="lynn-pronk-contact"
                method="POST"
                //action="contact-success"
                netlify-honeypot="bot-field"
                data-netlify="true"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <p>
                  <label htmlFor="name">
                    <span>Name (required)</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      id="name"
                      ref={register({
                        required: "Please enter your name",
                        maxLength: 80,
                        message: "Please enter your name"
                      })} />
                    <ErrorMessage errors={errors} name="name" as="em" />
                  </label>
                </p>
                <p>
                  <label htmlFor="email">
                    <span>Email (required)</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email address"
                      id="email"
                      ref={register({
                        required: "Please enter your email",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "Invalid email address address"
                        }
                      })} />
                    <ErrorMessage errors={errors} name="email" as="em" />
                  </label>
                </p>
                <p>
                  <label htmlFor="subject">
                    <span>Subject</span>
                    <input
                      type="text"
                      name="subject"
                      id="subject" />
                  </label>
                </p>
                <p>
                  <label htmlFor="message">
                    <span>Message</span>
                    <textarea
                      name="message"
                      id="message"
                      rows="5" />
                  </label>
                </p>
                <p>
                  <button
                    type="submit"
                    className="buttonPrimary">Submit</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </Layout >
    </>
  );
};

export default ContactForm
