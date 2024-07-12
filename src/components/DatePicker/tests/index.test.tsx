/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, screen } from '@testing-library/react';
import DatePicker from '../index';

describe('DatePicker', () => {
  it('renders DatePicker', () => {
    render(<DatePicker />);

    const { container } = render(<DatePicker />);
    expect(container).toMatchSnapshot();
  });
});
