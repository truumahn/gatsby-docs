import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
      }
    }
  }
`;

const SEO = ({ title, article, description }) => {
  const { site } = useStaticQuery(query);
  const { defaultTitle, defaultDescription, titleTemplate } = site.siteMetadata;
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
  };

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  article: PropTypes.bool,
};
