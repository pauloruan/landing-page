import styled from 'styled-components';

export const Text = styled.p`
  color: ${({ theme, dark }) => (dark ? theme.colors.white : theme.colors.primary)};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
`;
