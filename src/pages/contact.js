import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import Head from '../components/head'
import Header from "../components/header"
import contactStyles from './contact.module.scss'

const ContactPage = () => {
  return (
    <>
      <Helmet
        meta={[
          {
            rel: "preconnect",
            href: "https://lynn-pronk-datocms.netlify.app/",
          },
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" },
        ]}
      >
        <html lang="en" />
        <link
          rel="preconnect"
          href="https://lynn-pronk-datocms.netlify.app/"
        ></link>

        <link
          rel="preconnect"
          href="https://www.datocms-assets.com/26318/"
        ></link>
      </Helmet>
      <Head title="Contact me" />

      <Header />
      <Layout>
        <div className={contactStyles.contactForm}>

        </div>

        <div className={contactStyles.contactFormWrapper}>
          <h2>Thanks for visiting my gallery!</h2>
          <div className={contactStyles.contactForm}>


            {/* <p><strong>Thanks for visiting my website!</strong></p> */}
            <p>I would love to be contacted to discuss work commissions or just hear your thoughts and ideas.
I will always reply.</p>


            <p>You can call me on <a href="tel:+64 27 4583 948">+64 27 4583 948</a> or <a href="tel:+64 9 3784 087">+64 9 3784 087</a>. Alternativly, complete the form for email enquires. Thank you.</p>
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
    </>
  );
};

export default ContactPage;
