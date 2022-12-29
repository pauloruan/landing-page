import PropTypes from 'prop-types';
import MenuLink from '../MenuLink';
import * as Styled from './styles';

export default function NavBar({ links = [] }) {
  return (
    <Styled.Container aria-label="Main menu">
      {links.map((link) => (
        <MenuLink key={link.link} link={link.link} newTab={link.newTab}>
          {link.children}
        </MenuLink>
      ))}
    </Styled.Container>
  );
}

NavBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      newTab: PropTypes.bool,
    }),
  ),
};
