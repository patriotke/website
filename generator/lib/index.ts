/**
 * Component Generator
 */

/* eslint strict: ["off"] */
/* eslint-disable @typescript-eslint/no-var-requires */

'use strict';

import { pageExists } from '../utils/itemExists';
import { IInputDir } from '../types';

export default {
  description: 'Create a lib file',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is the file name?',
      // default: 'Button',
      validate: (value: string, { dirname, parentDir }: IInputDir) => {
        // console.log(dirname)
        if (/.+/.test(value)) {
          const dir = dirname ? `${dirname}/` : '';
          return pageExists(`${parentDir}/${dir}${value}`)
            ? 'A file with this name already exists'
            : true;
        }

        return 'The name is required';
      },
      filter: (value: string) => value.toLowerCase(),
    },
  ],
  actions: () => {
    // Generate index.js and index.test.js
    const actions = [
      {
        type: 'add',
        path: '../src/lib/{{camelCase name}}.ts',
        templateFile: './lib/lib.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/lib/tests/{{camelCase name}}.test.ts',
        templateFile: './lib/test.ts.hbs',
        abortOnFail: true,
      },
    ];

    actions.push({
      type: 'prettify',
      path: `/lib/`,
      // @ts-expect-error the value is not in the type
      format: 'camelCase',
      isFile: true,
    });

    return actions;
  },
};
