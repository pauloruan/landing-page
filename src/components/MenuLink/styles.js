import styled from 'styled-components';

export const Container = styled.a`
  display: block;
  text-decoration: none;
  position: relative;
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  padding: ${({ theme }) => theme.spacings.small};
  color: ${({ theme }) => theme.colors.primary};

  &::after {
    content: '';
    position: absolute;
    bottom: 0.75rem;
    left: 50%;
    width: 0%;
    height: 0.2rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    transition: all 0.3s ease-in-out;
  }

  &:hover::after {
    left: 25%;
    width: 50%;
  }
`;
