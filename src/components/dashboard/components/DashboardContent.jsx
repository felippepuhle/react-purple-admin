// @flow
import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 2.75rem 2.25rem;
`;

type Props = {
  children: React.Node,
};

class DashboardContent extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;

    return (
      <Wrapper>
        {children}
      </Wrapper>
    );
  }
}

export default DashboardContent;
