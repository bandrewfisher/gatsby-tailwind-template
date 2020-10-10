import React from 'react';
import { render } from '@testing-library/react';
import Header from '../header';

describe('header test', () => {
  const createWrapper = () => render(<Header siteTitle="Hello" />);

  it('matches snapshot', () => {
    expect(createWrapper()).toMatchSnapshot();
  });
});
