import React from 'react';
import Layout from '../components/layout'
import Head from '../components/head'
import Header from '../components/header'
import contactStyles from './contact.module.scss'
import LikeIcon from '../img/svg/like.inline.svg'

const ContactPage = () => {
  return (
    <div>
      <Header />
      <Layout>
        <Head title="Contact" />
        <div className={contactStyles.contactForm}>
          <div className={contactStyles.contactFormWrapper + ' ' + contactStyles.contactFormSucess}>
            <h2>Thank you</h2>
            <span className={contactStyles.contactFormSucess} ><LikeIcon /></span>
            <p>I have recieved your request and will reply to you soon.</p>
          </div>
        </div>
      </Layout>
    </div >
  );
};
export default ContactPage;
