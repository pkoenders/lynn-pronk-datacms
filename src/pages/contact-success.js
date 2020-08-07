import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import contactStyles from './contact.module.scss'
import LikeIcon from '../img/svg/like.inline.svg'

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query ContactSuccessData {
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
        <title>Contact success | {data.site.siteMetadata.title}</title>
        <meta name="description" content="Contact page success. Thanks for completing our contact form." />
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
