import PropTypes from 'prop-types';

const itemsShape = () => {
  return PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(itemsShape),
  });
};

export const tocType = PropTypes.arrayOf(itemsShape);

export const pageType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  timeToRead: PropTypes.number,
  toc: tocType,
  slug: PropTypes.string.isRequired,
  modifiedTime: PropTypes.string,
  modifiedTimeRelative: PropTypes.string,
});

// eslint-disable-next-line react/forbid-prop-types
export const locationType = PropTypes.object;

const sidebarItemsShape = () => {
  return PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(sidebarItemsShape),
  });
};

export const sidebarType = PropTypes.arrayOf(sidebarItemsShape);

export const searchableDataType = PropTypes.arrayOf(
  PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
    id: PropTypes.string,
    excerpt: PropTypes.arrayOf(PropTypes.string),
  }),
);
