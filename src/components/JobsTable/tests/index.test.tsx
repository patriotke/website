/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, screen } from '@testing-library/react';
import JobsTable from '../index';

describe('JobsTable', () => {
  it('renders JobsTable', () => {
    render(<JobsTable />);

    const { container } = render(<JobsTable />);
    expect(container).toMatchSnapshot();
  });
});
