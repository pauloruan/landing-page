import PropTypes from 'prop-types';
import * as Styled from './styles';

export default function MenuLink({ children, link, newTab = false }) {
  return (
    <Styled.Container href={link} target={newTab ? '_blank' : '_self'}>
      {children}
    </Styled.Container>
  );
}

MenuLink.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  newTab: PropTypes.bool,
};
