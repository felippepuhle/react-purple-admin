// @flow
import * as React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import styled from 'styled-components';

import LogoAsset from '../../../assets/img/logo.svg';
import LogoMiniAsset from '../../../assets/img/logo-mini.svg';

import MEDIA from '../../../styles/media';
import * as FONTS from '../../../styles/fonts';

const StyledNavbar = styled(Navbar).attrs({
  className: 'd-flex flex-row',
  fixed: true,
  light: true,
  color: 'light',
})`
  font-family: ${FONTS.LIGHT};
  padding: 0px !important;
  height: 70px;
`;

const StyledNavbarBrand = styled(NavbarBrand)`
  transition: width 0.25s ease;
  display: flex !important;
  align-items: center;
  justify-content: center;
  width: 55px;
  margin: 0px !important;
  padding: 0px !important;

  ${MEDIA.LG`
    width: 260px;
  `};
`;

const Logo = styled.img.attrs({
  className: props => props.mobile ? 'd-block d-lg-none' : 'd-none d-lg-block',
})`
  max-width: 100%;
  width: ${props => props.mobile ? 20 : 140}px;
  height: 28px;
`;

class DashboardHeader extends React.PureComponent<*> {
  render() {
    return (
      <StyledNavbar>
        <StyledNavbarBrand>
          <Logo src={LogoAsset} />
          <Logo src={LogoMiniAsset} mobile />
        </StyledNavbarBrand>
      </StyledNavbar>
    );
  }
}

export default DashboardHeader;
