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
        path: '../src/components/{{properCase name}}/index.js',
        templateFile: './component/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{properCase name}}/tests/index.test.js',
        templateFile: './component/test.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{properCase name}}/stories/{{properCase name}}.stories.js',
        templateFile: './component/stories.js.hbs',
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
