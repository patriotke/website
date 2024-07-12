/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, screen } from '@testing-library/react';
import SubmissionToolbar from '../index';

describe('SubmissionToolbar', () => {
  it('renders SubmissionToolbar', () => {
    render(<SubmissionToolbar />);

    const { container } = render(<SubmissionToolbar />);
    expect(container).toMatchSnapshot();
  });
});
