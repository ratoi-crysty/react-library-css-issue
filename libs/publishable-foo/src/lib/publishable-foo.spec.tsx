import React from 'react';
import { render } from '@testing-library/react';

import PublishableFoo from './publishable-foo';

describe(' PublishableFoo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PublishableFoo />);
    expect(baseElement).toBeTruthy();
  });
});
