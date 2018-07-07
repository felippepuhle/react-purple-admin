// @flow
import * as React from 'react';
import styled from 'styled-components';

import * as COLORS from '../../../styles/colors';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: ${props => props.size / 2}px;
  overflow: hidden;
  background-color: ${props => props.backgroundColor};
  font-size: ${props => props.size / 3}px;
  font-weight: bold;
  color: ${props => props.color};
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

type Props = {
  name: string,
  image: ?string,
  size: ?number,
  backgroundColor: ?string,
  color: ?string,
};

class Avatar extends React.PureComponent<Props> {
  static defaultProps = {
    size: 50,
    backgroundColor: COLORS.LIGHT,
    color: COLORS.DARK,
  };

  getInitials = (): string => {
    const { name } = this.props;

    return name
      .split(' ')
      .slice(0, 2)
      .map(namePart => namePart.charAt(0))
      .join('');
  };

  render() {
    const {
      name,
      image,
      size,
      backgroundColor,
      color,
    } = this.props;

    return (
      <Wrapper
        size={size}
        backgroundColor={backgroundColor}
        color={color}
      >
        {image && <Image src={image} alt={name} />}
        {!image && this.getInitials()}
      </Wrapper>
    );
  }
}

export default Avatar;