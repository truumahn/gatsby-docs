/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const docs = require(`./src/utils/node/docs.js`);
const fs = require(`fs-extra`);
const yaml = require(`js-yaml`);
const redirects = yaml.load(fs.readFileSync(`./redirects.yml`));
const sections = [docs];

exports.createPages = async (helpers) => {
  const { actions } = helpers;
  const { createRedirect } = actions;

  if (redirects) {
    redirects.forEach((redirect) => {
      createRedirect({ isPermanent: true, ...redirect, force: true });
    });
  }

  await Promise.all(
    sections.map((section) => {
      return section.createPages(helpers);
    }),
  );
};

// Create slugs for files, set released status for blog posts.
exports.onCreateNode = (helpers) => {
  sections.forEach((section) => {
    return section.onCreateNode(helpers);
  });
};

exports.onPostBuild = () => {
  sections.forEach((section) => {
    return section.onPostBuild();
  });
};
