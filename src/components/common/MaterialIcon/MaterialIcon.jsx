// @flow
import * as React from 'react';

type Props = {
  name: string,
  className?: string,
};

class MaterialIcon extends React.PureComponent<Props> {
  static defaultProps = {
    className: null,
  };

  getClassName = () => {
    const { name, className } = this.props;

    const mdiClass = `mdi mdi-${name}`;

    if (className) {
      return `${mdiClass} ${className}`;
    }

    return mdiClass;
  }

  render() {
    return (
      <i className={this.getClassName()} />
    );
  }
}

export default MaterialIcon;
