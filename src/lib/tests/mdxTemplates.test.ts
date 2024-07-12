/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
// import { render, screen } from '@testing-library/react'
import { getMissingPersonTemplate } from '../mdxTemplates';

jest.useFakeTimers().setSystemTime(new Date('2024-01-01'));

describe('getMissingPersonTemplate', () => {
  it('tests markdown', () => {
    expect(
      getMissingPersonTemplate({
        id: 'afd25a34-d732-4666-9494-faf6355ce77a',
        name: 'John Doe',
        age: 20,
        description: 'someDescription',
        missingDate: '2022-01-01',
        location: 'Nairobi',
        photo: 'fec43a30-c0c7-4a70-834a-db4279abe08c.jpg',
      }),
    ).toBe(
      '---\n' +
        'id: afd25a34-d732-4666-9494-faf6355ce77a\n' +
        'name: John Doe\n' +
        'age: 20\n' +
        'missing: 2022-01-01\n' +
        'location: Nairobi\n' +
        'photo: fec43a30-c0c7-4a70-834a-db4279abe08c.jpg\n' +
        'reported: 2024-01-01T00:00:00.000Z\n' +
        '---\n' +
        '\n' +
        '  ## Missing Person Report\n' +
        '  \n' +
        '  ![John Doe](images/fec43a30-c0c7-4a70-834a-db4279abe08c.jpg)\n' +
        '  \n' +
        '  someDescription',
    );
  });
});
