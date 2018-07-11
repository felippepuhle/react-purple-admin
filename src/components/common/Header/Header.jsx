// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import styled from 'styled-components';
import chroma from 'chroma-js';

import * as COLORS from '../../../styles/colors';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Title = styled.h3`
  color: #000;
  font-size: 1.125rem;
  margin-bottom: 0;
`;

const StyledBreadcrumb = styled(Breadcrumb)`
  .breadcrumb {
    background: none;
    margin: 0;
    padding: 0.56rem 1.13rem;
    font-size: 0.875rem;
  }
`;

const BreadcrumbItemWithLink = styled(BreadcrumbItem)`
  a {
    transition: color 200ms linear;
    text-decoration: none !important;
    color: ${chroma(COLORS.PRIMARY).darken(0.5)} !important;

    &:hover {
      color: ${chroma(COLORS.PRIMARY).darken(0.8)} !important;
    }
  }
`;

const LastBreadcrumbItem = styled(BreadcrumbItem).attrs({
  active: true,
})`
  color: #495057 !important;
`;

type BreadcrumbItemType = {
  label: string,
  route?: string,
};

type Props = {
  title: string,
  breadcrumb?: Array<BreadcrumbItemType>,
};

class Header extends React.PureComponent<Props> {
  static defaultProps = {
    breadcrumb: null,
  };

  renderBreadcrumb = () => {
    const { breadcrumb } = this.props;

    if (!breadcrumb) {
      return null;
    }

    return (
      <StyledBreadcrumb>
        {breadcrumb.map((item: BreadcrumbItemType) => {
          if (!item.route) {
            return (
              <LastBreadcrumbItem key={item.label}>
                {item.label}
              </LastBreadcrumbItem>
            );
          }

          return (
            <BreadcrumbItemWithLink key={item.label}>
              <Link to={item.route}>
                {item.label}
              </Link>
            </BreadcrumbItemWithLink>
          );
        })}
      </StyledBreadcrumb>
    );
  };

  render() {
    const { title } = this.props;

    return (
      <Wrapper>
        <Title>{title}</Title>
        {this.renderBreadcrumb()}
      </Wrapper>
    );
  }
}

export default Header;
