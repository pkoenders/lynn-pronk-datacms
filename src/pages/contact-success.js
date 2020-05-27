import React from 'react';
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import Head from '../components/head'
import Header from '../components/header'
import contactStyles from './contact.module.scss'
import LikeIcon from '../img/svg/like.inline.svg'

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
      <Head title="Contact success" />
      <Header />
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
