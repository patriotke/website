/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, screen } from '@testing-library/react';
import SubmissionPane from '../index';

describe('SubmissionPane', () => {
  it('renders SubmissionPane', () => {
    render(<SubmissionPane />);

    const { container } = render(<SubmissionPane />);
    expect(container).toMatchSnapshot();
  });
});
