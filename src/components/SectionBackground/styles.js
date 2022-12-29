import styled from 'styled-components';

export const Background = styled.div`
  background-color: ${({ theme, background }) => (background ? theme.colors.primary : theme.colors.white)};
  color: ${({ theme, background }) => (background ? theme.colors.white : theme.colors.primary)};
  min-height: 100vh;
  display: flex;
  align-items: center;
`;
