import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import PropTypes from 'prop-types';
import { useState } from 'react';
import LogoLink from '../LogoLink';
import NavBar from '../NavBar';
import SectionContainer from '../SectionContainer';
import * as Styled from './styles';

export default function Menu({ links = [], logoData }) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Styled.Button visible={visible} onClick={() => setVisible(true)} aria-label="Open/Close menu">
        {visible ? <CloseIcon aria-label="Close menu" /> : <MenuIcon aria-label="Open menu" />}
      </Styled.Button>
      <Styled.Container visible={visible} onClick={() => setVisible(false)}>
        <SectionContainer>
          <Styled.MenuWrapper>
            <LogoLink {...logoData} />
            <NavBar links={links} />
          </Styled.MenuWrapper>
        </SectionContainer>
      </Styled.Container>
    </>
  );
}

Menu.propTypes = {
  ...NavBar.propTypes,
  logoData: PropTypes.shape(LogoLink.propTypes).isRequired,
};
