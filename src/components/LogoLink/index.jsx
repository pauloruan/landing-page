import PropTypes from 'prop-types';
import Heading from '../Heading';
import * as Styled from './styles';

export default function LogoLink({ text, srcImg = null, link }) {
  return (
    <Heading size="small" uppercase>
      <Styled.Link href={link}>{srcImg ? <Styled.Image src={srcImg} alt={text} /> : text}</Styled.Link>
    </Heading>
  );
}

LogoLink.propTypes = {
  text: PropTypes.string.isRequired,
  srcImg: PropTypes.string,
  link: PropTypes.string.isRequired,
};
