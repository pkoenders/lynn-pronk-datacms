import React from 'react';
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import contactStyles from './contact.module.scss'
import LikeIcon from '../img/svg/like.inline.svg'

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Contact success</title>
        <meta name="description" content="Contact page success. Thanks for completing the form." />
        <link
          rel="preconnect"
          href="https://lynn-pronk-datocms.netlify.app/"
        ></link>
        <link
          rel="preconnect"
          href="https://www.datocms-assets.com/26318/"
        ></link>
      </Helmet>

      <Layout>
        <div className={contactStyles.contactForm}>
          <div className={contactStyles.contactFormWrapper + ' ' + contactStyles.contactFormSucess}>
            <h2>Thank you</h2>
            <span className={contactStyles.contactFormSucess} ><LikeIcon /></span>
            <p>I have recieved your request and will reply to you soon.</p>
          </div>
        </div>
      </Layout>
    </ >
  );
};
export default ContactPage;
