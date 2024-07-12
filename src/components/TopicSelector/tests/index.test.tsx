/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, screen } from '@testing-library/react';
import TopicSelector from '../index';

describe('TopicSelector', () => {
  it('renders TopicSelector', () => {
    render(<TopicSelector />);

    const { container } = render(<TopicSelector />);
    expect(container).toMatchSnapshot();
  });
});
