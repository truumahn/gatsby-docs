/* eslint-disable react/require-default-props */
import React, { useRef, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from '../../Routing/Link';
import { List } from './Sidebar.style';
import { sidebarType } from '../../../types';
import { NavigationDataContext } from '../../../context/NavigationDataProvider';

const SidebarLinks = React.memo(({ menuLevel }) => {
  const { currentSlug } = useContext(NavigationDataContext);
  const linkRef = useRef(null);

  useEffect(() => {
    if (linkRef && linkRef.current) {
      linkRef.current.scrollIntoView();
    }
  }, []);
  return (
    <List>
      {menuLevel.map(({ link, title, items }, index) => {
        return (
          <li ref={currentSlug === link ? linkRef : null} key={link || index}>
            {!link ? <>{title}</> : <Link to={link}>{title}</Link>}
            {items ? <SidebarLinks menuLevel={items} /> : null}
          </li>
        );
      })}
    </List>
  );
});

SidebarLinks.propTypes = {
  menuLevel: sidebarType,
};

const Sidebar = ({ className = null }) => {
  const { sidebar } = useContext(NavigationDataContext);

  return sidebar ? (
    <nav className={className}>
      <SidebarLinks menuLevel={sidebar} />
    </nav>
  ) : null;
};

Sidebar.propTypes = {
  className: PropTypes.string,
};

export default Sidebar;
