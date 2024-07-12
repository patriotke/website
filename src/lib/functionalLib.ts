import { Maybe } from 'monio';

// eslint-disable-next-line import/prefer-default-export
export const getPropSafe = (prop: string) => (obj: object) =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  Maybe.from(obj[prop]);
