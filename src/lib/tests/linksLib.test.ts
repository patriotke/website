/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
// import { render, screen } from '@testing-library/react'
import { getHeaderLinks, getStatefulLinks } from '../linksLib';

describe('getStatefulLinks', () => {
  it('tests for empty links', () => {
    const pageLinks = getStatefulLinks('');
    expect(pageLinks([])).toEqual(expect.arrayContaining([]));
  });
  it('tests for unchanged links', () => {
    const pageLinks = getStatefulLinks('');
    expect(pageLinks(getHeaderLinks())).toEqual(
      expect.arrayContaining(getHeaderLinks()),
    );
  });
  it('tests for active links', () => {
    const link = getHeaderLinks()[0];
    const pageLinks = getStatefulLinks(link.href);
    expect(pageLinks(getHeaderLinks())).toEqual(
      expect.arrayContaining([{ ...link, active: true }]),
    );
  });
});
