import PropTypes from 'prop-types';
import * as Styled from './styles';

export default function Heading({ children, dark = false }) {
  return <Styled.Title dark={dark}>{children}</Styled.Title>;
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  dark: PropTypes.bool.isRequired,
};
