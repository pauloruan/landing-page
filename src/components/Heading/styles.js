import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${({ theme, size }) => theme.fonts.sizes[size]};
  text-align: center;
  color: ${({ theme, dark }) => (dark ? theme.colors.white : theme.colors.secondary)};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fonts.sizes.xlarge};
  }
`;
