import React from 'react';
import ContactBGroundImg from '../components/contact-bground-img'
import Layout from '../components/layout'
import Head from '../components/head'
import Header from "../components/header"
import contactStyles from './contact.module.scss';

const ContactPage = () => {
  return (
    <div>
      {/* <ContactBGroundImg /> */}
      <Header />
      <Layout>
        <Head title="Contact" />

        <div className={contactStyles.contactForm}>

        </div>

        <div className={contactStyles.contactFormWrapper}>
          <h2>Contact Lynn</h2>
          <div className={contactStyles.contactForm}>


            <p><strong>Thanks for visiting my website!</strong></p>
            <p>I would love to be contacted to discuss work commissions or just hear your thoughts and ideas.
I will always reply.</p>

            <div className={contactStyles.contactFormInput}>
              <form
                method="post"
                action="contact-success"
                netlify-honeypot="bot-field"
                data-netlify="true"
                name="lynn-pronk-contact"
              >
                <input type="hidden" name="bot-field" />
                <p>
                  <label>
                    <span>Name (required)</span>
                    <input type="text" name="name" id="name" required />
                  </label>
                </p>
                <p>
                  <label>
                    <span>Email (required)</span>
                    <input type="email" name="email" id="email" required />
                  </label>
                </p>
                <p>
                  <label>
                    <span>Subject</span>
                    <input type="text" name="subject" id="subject" />
                  </label>
                </p>
                <p>
                  <label>
                    <span>Message</span>
                    <textarea name="message" id="message" rows="5" />
                  </label>
                </p>
                <p>
                  <button type="submit" class="buttonPrimary">Submit</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </Layout >
    </div>
  );
};

export default ContactPage;
