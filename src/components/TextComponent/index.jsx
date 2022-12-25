import PropTypes from 'prop-types';
import * as Styled from './styles';

export default function TextComponent({ children, dark = false }) {
  return <Styled.Text dark={dark}>{children}</Styled.Text>;
}

TextComponent.propTypes = {
  children: PropTypes.node.isRequired,
  dark: PropTypes.bool,
};
