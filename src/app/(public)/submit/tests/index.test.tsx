/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, screen } from '@testing-library/react';
import Submit from '../page';

describe('Submit', () => {
  it('renders Submit', () => {
    render(<Submit />);

    const { container } = render(<Submit />);
    expect(container).toMatchSnapshot();
  });
});
