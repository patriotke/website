/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

/* eslint-disable @typescript-eslint/no-var-requires */

import { pageExists } from '../utils/itemExists';
import { IDir, IInputDir } from '../types';

export default {
  description: 'Create a NextJs page',
  prompts: [
    {
      type: 'list',
      name: 'parentDir',
      message: 'Where do you want to place this page?',
      choices: ['(auth)', '(public)', '(protected)'],
    },
    {
      type: 'list',
      name: 'dir',
      default: 'no',
      message:
        'Would you like to nest this page in a directory? e.g. app/(public)/subdir/',
      choices: [
        { name: 'Yes', value: 'yes' },
        { name: 'No', value: 'no' },
      ],
    },
    {
      type: 'input',
      name: 'dirname',
      message: 'What is the directory name?',
      when: (data: IDir) => data.dir === 'yes',
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the page name?',
      // default: 'Button',
      validate: (value: string, { dirname, parentDir }: IInputDir) => {
        // console.log(dirname)
        if (/.+/.test(value)) {
          const dir = dirname ? `${dirname}/` : '';
          return pageExists(`${parentDir}/${dir}${value}`)
            ? 'A page with this name already exists'
            : true;
        }

        return 'The name is required';
      },
      filter: (value: string) => value.toLowerCase(),
    },
  ],
  actions: (data: IInputDir) => {
    // Generate index.js and index.test.js
    const dir = data.dirname ? `${data.dirname}/` : '';
    const path = `../src/app/${data.parentDir}/${dir}/{{dashCase name}}/page.tsx`;
    const actions = [
      {
        path,
        type: 'add',
        templateFile: './page/page.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `../src/app/${data.parentDir}/${dir}/{{dashCase name}}/tests/index.test.tsx`,
        templateFile: './page/test.tsx.hbs',
        abortOnFail: true,
      },
    ];

    actions.push({
      type: 'prettify',
      path: `/app/${data.parentDir}/${data.dirname ? `${data.dirname}/` : ''}`.replace(
        /([()?])/g,
        '\\$1',
      ),
      // @ts-expect-error the value is not in the type
      format: 'dashCase',
    });

    return actions;
  },
};
