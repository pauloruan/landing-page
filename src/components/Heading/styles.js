import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${({ theme, dark }) => (dark ? theme.colors.white : theme.colors.secondary)};
`;
