import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-flow: row wrap;

  @media ${({ theme }) => theme.medias.lteMedium} {
    flex-flow: column wrap;
    align-content: center;
  }
`;
