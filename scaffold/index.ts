/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

/* eslint-disable @typescript-eslint/no-var-requires */
import fs from 'fs';
import path from 'path';

// eslint-disable-next-line import/extensions
import { execSync } from 'child_process';
// eslint-disable-next-line import/no-extraneous-dependencies
import { NodePlopAPI } from 'plop';
import componentGenerator from './component/index';
// eslint-disable-next-line import/extensions
import pageGenerator from './page/index';
// eslint-disable-next-line import/extensions
import libGenerator from './lib/index';

/**
 * Every generated backup file gets this extension
 * @type {string}
 */
const BACKUPFILE_EXTENSION = 'rbgen';

export default (plop: NodePlopAPI) => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('lib', libGenerator);
  // @ts-expect-error the value is not in the type
  plop.setGenerator('page', pageGenerator);
  plop.setHelper('directory', (comp) => {
    try {
      fs.accessSync(
        path.join(__dirname, `../../containers/${comp}`),
        fs.constants.F_OK,
      );
      return `src/containers/${comp}`;
    } catch (e) {
      return `src/components/${comp}`;
    }
  });
  plop.setHelper('curly', (object, open) => (open ? '{' : '}'));
  plop.setActionType('prettify', (answers, config) => {
    if (config.isFile) {
      const pattern = `${path.join(
        __dirname,
        '/../src/',
        config.path,
        '**',
        `${plop.getHelper(config.format)(answers.name)}*.@(ts|tsx)`,
      )}`;

      execSync(`npm run prettify -- "${pattern}"`);
      return pattern;
    }
    const folderPath = `${path.join(
      __dirname,
      '/../src/',
      config.path,
      config.format
        ? plop.getHelper(config.format)(answers.name)
        : plop.getHelper('properCase')(answers.name),
      '**',
      '**.@(ts|tsx)',
    )}`;
    execSync(`npm run prettify -- "${folderPath}"`);
    return folderPath;
  });
  plop.setActionType('backup', (answers, config) => {
    // eslint-disable-next-line no-useless-catch
    try {
      fs.copyFileSync(
        path.join(__dirname, config.path, config.file),
        path.join(
          __dirname,
          config.path,
          `${config.file}.${BACKUPFILE_EXTENSION}`,
        ),
        fs.constants.COPYFILE_EXCL,
      );
      return path.join(
        __dirname,
        config.path,
        `${config.file}.${BACKUPFILE_EXTENSION}`,
      );
    } catch (err) {
      throw err;
    }
  });
};
