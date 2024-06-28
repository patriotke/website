/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

/* eslint-disable @typescript-eslint/no-var-requires */
import { componentExists } from '../utils/itemExists';

export default {
  description: 'Add a component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: (value: string) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'memo',
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
    },
  ],
  actions: () => {
    // Generate index.js and index.test.js
    const actions = [
      {
        type: 'add',
        path: '../src/components/{{properCase name}}/index.tsx',
        templateFile: './component/index.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{properCase name}}/tests/index.test.tsx',
        templateFile: './component/test.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{properCase name}}/stories/{{properCase name}}.stories.tsx',
        templateFile: './component/stories.tsx.hbs',
        abortOnFail: true,
      },
    ];

    actions.push({
      type: 'prettify',
      path: '/components/',
      abortOnFail: true,
      templateFile: '',
    });

    return actions;
  },
};
