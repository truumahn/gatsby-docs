import React from 'react';
import PropTypes from 'prop-types';
import hierarchy from '../../docs/hierarchy.yml';

(() => {
  const addParentRefs = (tree, parentObject) => {
    tree.forEach((item) => {
      // eslint-disable-next-line no-param-reassign
      item.parent = parentObject;
      if (Array.isArray(item.items)) {
        addParentRefs(item.items, item);
      }
    });
  };
  addParentRefs(hierarchy, null);
})();

const getActiveTrail = (item, activeTrail = []) => {
  activeTrail.unshift(item);
  if (item.parent) {
    getActiveTrail(item.parent, activeTrail);
  }
  return activeTrail;
};

const getActiveItem = (tree, slug) => {
  let result = null;
  for (let i = 0; i < tree.length; i += 1) {
    const item = tree[i];
    if (item.link === slug) {
      result = item;
      break;
    }
    if (item.items) {
      result = getActiveItem(item.items, slug);
    }
    if (result) {
      break;
    }
  }
  return result;
};

export const NavigationDataContext = React.createContext({
  currentSlug: null,
  mainNavigation: [...hierarchy],
  sidebar: null,
});

const NavigationDataProvider = ({ children = null, currentSlug = null }) => {
  const activeItem = getActiveItem(hierarchy, currentSlug);
  const activeTrail = activeItem ? getActiveTrail(activeItem) : null;
  return (
    <NavigationDataContext.Provider
      value={{
        currentSlug,
        mainNavigation: [...hierarchy],
        sidebar: activeTrail && activeTrail[0].items,
        activeTrail,
      }}
    >
      {children}
    </NavigationDataContext.Provider>
  );
};

NavigationDataProvider.propTypes = {
  children: PropTypes.node,
  currentSlug: PropTypes.string,
};

export default NavigationDataProvider;
