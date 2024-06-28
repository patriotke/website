/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

/* eslint-disable @typescript-eslint/no-var-requires */
import fs from 'fs';
import path from 'path';

const components = fs.readdirSync(path.join(__dirname, '../../src/components'));
const pages = fs.readdirSync(path.join(__dirname, '../../src/app'));

export function componentExists(comp: string) {
  return components.indexOf(comp) >= 0;
}
export function pageExists(comp: string) {
  return pages.indexOf(comp) >= 0;
}
