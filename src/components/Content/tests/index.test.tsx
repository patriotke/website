/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, screen } from '@testing-library/react';
import Content from '../index';

describe('Content', () => {
  it('renders Content', () => {
    render(<Content />);

    const { container } = render(<Content />);
    expect(container).toMatchSnapshot();
  });
});
