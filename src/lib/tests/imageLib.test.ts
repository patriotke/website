/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
// import { render, screen } from '@testing-library/react'
import { someFn } from '../imageLib';

describe('ImageLib', () => {
  it('tests someFn', () => {
    expect(someFn()).toBe('someFn');
  });
});
