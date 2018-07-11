// @flow
import * as React from 'react';
import { Card, CardBody } from 'reactstrap';
import styled from 'styled-components';

import * as COLORS from '../../../styles/colors';

const StyledCard = styled(Card)`
  border: none !important;
  border-radius: 0.3125rem !important;
`;

const StyledCardBody = styled(CardBody)`
  padding: 2.5rem !important;
`;

const Title = styled.h4.attrs({ className: 'card-title' })`
  margin-bottom: .75rem;
  font-size: 1.125rem;
  font-weight: 500;
  color: #000;
}
`;

const Description = styled.p.attrs({ className: 'card-description' })`
  margin-bottom: 1.5rem;
  font-size: .9375rem;
  color: #76838f;

  code {
    padding: 5px;
    color: ${COLORS.DANGER};
    font-family: 'Ubuntu',sans-serif;
    font-size: 0.875rem;
    font-weight: 300;
  }
`;

type Props = {
  children: React.Node,
};

class CustomCard extends React.PureComponent<Props> {
  static Body = StyledCardBody;
  static Title = Title;
  static Description = Description;

  render() {
    return (
      <StyledCard {...this.props} />
    );
  }
}

export default CustomCard;
