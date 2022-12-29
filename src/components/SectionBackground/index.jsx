import PropTypes from 'prop-types';
import SectionContainer from '../SectionContainer';
import * as Styled from './styles';

export default function SectionBackground({ children, background = false }) {
  return (
    <Styled.Background background={background}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Background>
  );
}

SectionBackground.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.bool,
};
