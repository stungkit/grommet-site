import React from 'react';

import { RadioButton } from 'grommet';
import { doc } from 'grommet/components/RadioButton/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';

const desc = doc(RadioButton).toJSON();

export default () => (
  <Page>
    <Doc
      name='RadioButton'
      desc={desc}
      examples={{
        checked: <RadioButton label='A' checked onChange={() => {}} />,
        disabled: <RadioButton label='A' disabled onChange={() => {}} />,
        label: <RadioButton label='A' onChange={() => {}} />,
      }}
    />
  </Page>
);
