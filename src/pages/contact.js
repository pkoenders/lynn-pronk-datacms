import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import contactStyles from './contact.module.scss'



const ContactForm = () => {
  const data = useStaticQuery(graphql`
    query ContactData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Contact me | {data.site.siteMetadata.title}</title>
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
                method="post"
                action="contact-success"
                netlify-honeypot="bot-field"
                data-netlify="true"

              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="lynn-pronk-contact" />
                <p>
                  <label htmlFor="name">
                    <span>Name (required)</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      id="name"
                      required
                    />
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
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      required
                    />
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
