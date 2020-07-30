import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

export const StyledAnchorLink = styled(AnchorLink)`
  font-weight: ${({ isActive }) => {
    return isActive ? 'bold' : 'initial';
  }};
`;
