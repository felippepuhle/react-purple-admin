// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, Collapse } from 'reactstrap';
import styled, { css } from 'styled-components';
import idx from 'idx';

import routeTo from '../../../../../router/utils/routeTo';
import * as COLORS from '../../../../../styles/colors';
import { MaterialIcon } from '../../../../common';

const Wrapper = styled(NavItem)`
  transition: background 0.25s;
  padding: 0 2.25rem;

  &:hover {
    background: #fcfcfc;
  }
`;

const LinkCSS = css`
  transition: 0.45s;
  display: flex !important;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  padding: 1.125rem 0 1.125rem 0 !important;
  cursor: pointer;
`;
const StyledLink = styled(Link).attrs({
  className: 'nav-link',
})`
  ${LinkCSS};
`;
const StyledDumbLink = styled.div.attrs({
  className: 'nav-link',
})`
  ${LinkCSS};
`;

const Title = styled.div`
  flex: 1;
  font-size: 0.875rem;
  font-weight: ${props => props.isColorized ? 500 : 400};
  color: ${props => props.isColorized ? COLORS.PRIMARY : '#3e4b5b'};
`;

const Icons = styled.div`
  display: flex;
`;

const Icon = styled(MaterialIcon)`
  transition: color 200ms ease;
  font-size: 1.125rem;
  color: ${props => props.isColorized ? COLORS.PRIMARY : '#bba8bff5'};
`;

const CollapseIconWrapper = styled.div`
  transition: transform 200ms ease;
  transform: ${props => props.isOpen ? 'rotate(-90deg)' : null};
  margin-right: .25rem;
`;

const SubItems = styled(Nav)`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px !important;
`;

const SubItemLink = styled(Link)`
  transition: 0.45s;
  display: flex;
  align-items: center;
  padding: 0.75rem 0;
  font-size: 0.8125rem;
  color: ${props => props.isColorized ? COLORS.PRIMARY : '#888'};
  text-decoration: none !important;

  &:hover {
    color: #555;
  }
`;

const SubItemIcon = styled(MaterialIcon).attrs({
  name: 'arrow-right',
})`
  padding-right: 1rem;
  font-size: .75rem;
  color: #a2a2a2;
`;

type SubItemType = {
  title: string,
  route: string,
  isActive?: boolean,
};

type Props = {
  title: string,
  icon: string,
  isActive?: boolean,
  route: ?string,
  subitems: ?Array<SubItemType>,
};

type State = {
  isOpen: boolean,
};

class DashboardSidebarItem extends React.PureComponent<Props, State> {
  static defaultProps = {
    isActive: false,
    route: null,
    subitems: null,
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: this.hasActiveSubItem(),
    };
  }

  hasActiveSubItem = (): boolean => {
    const { subitems } = this.props;

    if (!subitems) {
      return false;
    }

    return subitems.filter(subitem => !!subitem.isActive).length > 0;
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { title, icon, isActive } = this.props;
    const { isOpen } = this.state;

    const isColorized = isActive || this.hasActiveSubItem();

    const subitems = idx(this.props, _ => _.subitems) || [];
    const hasSubItems = !!subitems && subitems.length > 0;

    const LinkComponent = hasSubItems ? StyledDumbLink : StyledLink;
    const linkProps = hasSubItems ? { onClick: this.toggle } : { to: routeTo('dashboard') };

    return (
      <Wrapper>
        <LinkComponent {...linkProps}>
          <Title isColorized={isColorized}>{title}</Title>

          <Icons>
            {hasSubItems && (
              <CollapseIconWrapper isOpen={isOpen}>
                <Icon name="chevron-left" isColorized={isColorized} />
              </CollapseIconWrapper>
            )}
            <Icon name={icon} isColorized={isColorized} />
          </Icons>
        </LinkComponent>

        {hasSubItems && (
          <Collapse isOpen={isOpen}>
            <SubItems>
              {subitems.map(item => (
                <NavItem key={item.title}>
                  <SubItemLink to={item.route}>
                    <SubItemIcon />
                    {item.title}
                  </SubItemLink>
                </NavItem>
              ))}
            </SubItems>
          </Collapse>
        )}
      </Wrapper>
    );
  }
}

export default DashboardSidebarItem;
