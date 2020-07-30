/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Docs from '../components/ContentTypes';
import { tocType, locationType } from '../types';
import Notice from '../components/Notice/Notice';
import { CodeBlock, Table } from '../components/Mdx';

const components = { Notice, table: Table, pre: CodeBlock };

const DocsTemplate = ({
  data: {
    site,
    mdx: {
      body,
      frontmatter: { title },
      tableOfContents: { items: toc },
      fields: { slug, modifiedTime, modifiedTimeRelative },
      timeToRead,
    },
  },
  location,
}) => {
  const page = {
    siteTitle: site.siteMetadata.title,
    githubLink: site.siteMetadata.githubLink,
    title,
    toc,
    slug,
    modifiedTime,
    modifiedTimeRelative,
    timeToRead,
  };
  console.log(page.githubLink);
  return (
    <Docs page={page} location={location}>
      <MDXProvider components={components}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </Docs>
  );
};

DocsTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
        githubLink: PropTypes.string,
      }),
    }),
    mdx: PropTypes.shape({
      body: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: Docs.propTypes.title,
      }),
      tableOfContents: PropTypes.objectOf(tocType),
      fields: PropTypes.objectOf(PropTypes.string),
      timeToRead: PropTypes.number,
    }),
  }).isRequired,
  location: locationType.isRequired,
};

export default DocsTemplate;

export const pageQuery = graphql`
  query($id: String) {
    site {
      siteMetadata {
        title
        githubLink
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      tableOfContents
      timeToRead
      fields {
        slug
        modifiedTime
        modifiedTimeRelative
      }
      frontmatter {
        title
      }
    }
  }
`;
