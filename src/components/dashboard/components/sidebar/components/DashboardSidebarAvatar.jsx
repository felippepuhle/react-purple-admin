// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from 'reactstrap';
import styled from 'styled-components';

import routeTo from '../../../../../router/utils/routeTo';
import * as COLORS from '../../../../../styles/colors';
import { Avatar, MaterialIcon } from '../../../../common';

const Wrapper = styled(NavItem)`
  transition: background 0.25s;
  padding: 0 2.25rem;

  &:hover {
    background: #fcfcfc;
  }
`;

const StyledLink = styled(Link).attrs({
  className: 'nav-link',
})`
  transition: 0.45s;
  display: flex !important;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  padding: 1.25rem 0 !important;
`;

const NameAndDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${COLORS.DARK};
  margin-bottom: 0.5rem;
`;

const Description = styled.div`
  font-size: 12px;
  color: ${COLORS.SECONDARY};
`;

const Icon = styled(MaterialIcon).attrs({
  name: 'bookmark-check',
})`
  color: ${COLORS.SUCCESS};
`;

type Props = {
  image: string,
  name: string,
  description: string,
};

class DashboardSidebarAvatar extends React.PureComponent<Props> {
  render() {
    const { image, name, description } = this.props;

    return (
      <Wrapper>
        <StyledLink to={routeTo('dashboard')}>
          <Avatar image={image} name={name} size={44} />

          <NameAndDescription>
            <Name>{name}</Name>
            <Description>{description}</Description>
          </NameAndDescription>

          <Icon />
        </StyledLink>
      </Wrapper>
    );
  }
}

export default DashboardSidebarAvatar;
