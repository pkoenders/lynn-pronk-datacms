import React from 'react'
import { Helmet } from 'react-helmet'
const PreconnectLinks = () => {
    return (
        <>
            <Helmet>
                <link
                    rel="preconnect"
                    href="https://lynn-pronk-datocms.netlify.app"
                ></link>
                <link
                    rel="preconnect"
                    href="https://www.datocms-assets.com"
                ></link>
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                ></link>
            </Helmet>
        </>
    );
};

export default PreconnectLinks
