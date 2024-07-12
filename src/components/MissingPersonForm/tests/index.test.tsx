/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, screen } from '@testing-library/react';
import MissingPersonForm from '../index';

describe('MissingPersonForm', () => {
  it('renders MissingPersonForm', () => {
    render(<MissingPersonForm />);

    const { container } = render(<MissingPersonForm />);
    expect(container).toMatchSnapshot();
  });
});
