import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, path, type = 'website' }) => {
    const siteUrl = 'https://baridexsolution.shop';
    const fullUrl = `${siteUrl}${path}`;
    const defaultTitle = 'Baridex Solution Ltd | Pioneering Digital Frontiers';
    const defaultDescription = 'Expert software solutions in Data Science, Web Development, SEO, and Digital Marketing. Baridex Solution Ltd - Transforming data into excellence.';

    return (
        <Helmet>
            <title>{title ? `${title} | Baridex Solution` : defaultTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={title || defaultTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullUrl} />
            <meta property="twitter:title" content={title || defaultTitle} />
            <meta property="twitter:description" content={description || defaultDescription} />
            <meta property="twitter:image" content={`${siteUrl}/og-image.jpg`} />
        </Helmet>
    );
};

export default SEO;
