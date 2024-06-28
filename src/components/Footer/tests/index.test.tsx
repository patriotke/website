/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, screen } from '@testing-library/react';
import Footer from '../index';

describe('Footer', () => {
  it('renders Footer', () => {
    render(<Footer />);

    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
