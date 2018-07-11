// @flow
import * as React from 'react';

import buildPath from '../../../router/utils/buildPath';
import { Header, Card } from '../../common';

type Props = {

};

class Buttons extends React.PureComponent<Props> {
  render() {
    return (
      <div>
        <Header
          title="Buttons"
          breadcrumb={[
            { label: 'UI Elements', route: buildPath('/ui/buttons') },
            { label: 'Buttons' },
          ]}
        />

        <Card>
          <Card.Body>
            <Card.Title>Gradient Buttons</Card.Title>
            <Card.Description>Add <code>gradient</code> prop for gradient buttons</Card.Description>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Buttons;
