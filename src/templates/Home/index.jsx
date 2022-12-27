import Heading from '../../components/Heading';
import NavBar from '../../components/NavBar';
import * as Styled from './styles';

export default function Home() {
  return (
    <Styled.Wrapper>
      <NavBar />
      <Heading>Title</Heading>
    </Styled.Wrapper>
  );
}
