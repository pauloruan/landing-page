import PropTypes from 'prop-types';
import * as Styled from './styles';

export default function Heading({ children, dark = false, as = 'h1', size = 'huge', uppercase = false }) {
  return (
    <Styled.Title dark={dark} as={as} size={size} uppercase={uppercase}>
      {children}
    </Styled.Title>
  );
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  dark: PropTypes.bool,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge', 'huge']),
  uppercase: PropTypes.bool,
};
