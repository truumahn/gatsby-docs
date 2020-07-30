const _ = require(`lodash`);
const path = require(`path`);
const fs = require('fs');
const { slash } = require(`gatsby-core-utils`);
const { createFilePath } = require('gatsby-source-filesystem');
const { execSync } = require('child_process');
const chunk = require('../chunk');
let docsIndex = [];

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const docsTemplate = path.resolve(`./src/templates/DocsTemplate.jsx`);

  return graphql(`
    query {
      allMdx {
        edges {
          node {
            fileAbsolutePath
            excerpt(truncate: true, pruneLength: 10000000)
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(({ data, errors }) => {
    if (errors) {
      throw errors;
    }
    // Create docs pages.
    return data.allMdx.edges.forEach(({ node }) => {
      let slug = _.get(node, `fields.slug`);
      if (!slug) {
        return;
      }

      if (slug !== '/' && slug.charAt(slug.length - 1) === '/') {
        slug = slug.slice(0, -1);
      }

      docsIndex.push({
        title: node.frontmatter.title,
        slug,
        excerpt: chunk(node.excerpt, 150),
        id: node.id,
      });

      return createPage({
        path: `${node.fields.slug}`,
        component: slash(docsTemplate),
        context: {
          id: node.id,
          slug,
        },
      });
    });
  });
};

exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const gitModifiedTime = execSync(`git log -1 --pretty=format:%ci ${node.fileAbsolutePath}`, {
      encoding: 'utf-8',
      cwd: path.resolve('./docs'),
    });
    const gitModifiedTimeRelative = execSync(`git log -1 --pretty=format:%cr ${node.fileAbsolutePath}`, {
      encoding: 'utf-8',
      cwd: path.resolve('./docs'),
    });
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'docs/',
    });
    createNodeField({
      name: 'slug',
      node,
      value: slug,
    });
    createNodeField({
      name: 'modifiedTime',
      node,
      value: gitModifiedTime,
    });
    createNodeField({
      name: 'modifiedTimeRelative',
      node,
      value: gitModifiedTimeRelative,
    });
  }
};

exports.onPostBuild = () => {
  if (docsIndex.length > 0) {
    docsIndex = JSON.stringify(docsIndex);
    fs.writeFileSync('./public/docs-index.json', docsIndex, 'utf8');
  }
};
