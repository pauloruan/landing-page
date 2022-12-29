import styled from 'styled-components';
import { Title as Heading } from '../Heading/styles';
import { Container as SectionContainer } from '../SectionContainer/styles';

export const Container = styled.nav`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};
  transition: all 300ms ease-in-out;

  > ${SectionContainer} {
    padding-top: 0;
    padding-bottom: 0;
  }

  & ${Heading} {
    margin-top: 0;
    margin-bottom: 0;
  }

  @media ${({ theme }) => theme.medias.lteMedium} {
    height: 100vh;
    visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
    opacity: ${({ visible }) => (visible ? 1 : 0)};

    > ${SectionContainer} {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      height: 100vh;
      align-items: center;
      overflow-y: auto;
    }

    & ${Heading} {
      padding-bottom: ${({ theme }) => theme.spacings.large};
      display: flex;
      justify-content: center;
    }
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${({ theme }) => theme.medias.lteMedium} {
    display: block;
    text-align: center;
    padding: ${({ theme }) => theme.spacings.xxlarge} 0;
  }
`;

export const Button = styled.button`
  z-index: 6;
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 4rem;
  height: 4rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  display: none;
  pointer-events: ${({ visible }) => (visible ? 'none' : 'all')};

  > svg {
    width: 2.5rem;
    height: 2.5rem;
  }

  @media ${({ theme }) => theme.medias.lteMedium} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
