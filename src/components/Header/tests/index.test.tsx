/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, screen } from '@testing-library/react';
import { getHeaderLinks } from '@/lib/linksLib';
import Header from '../index';

describe('Header', () => {
  it('renders Header', () => {
    const { container } = render(<Header links={getHeaderLinks()} />);
    expect(container).toMatchSnapshot();
  });

  it('render Header with links', () => {
    const link = getHeaderLinks()[0];
    render(<Header links={getHeaderLinks()} />);
    expect(screen.getByText(link.text).closest('a')).toHaveAttribute(
      'href',
      link.href,
    );
    expect(screen.getByText('App').closest('a')).toHaveAttribute('href', '/');
  });
});
