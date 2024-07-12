// eslint-disable-next-line import/prefer-default-export
import { IMissingPersonRequest } from 'types/request.types';

/**
 * Submit a missing person request
 * @param data
 */
export const submitMissingPersonRequest = (data: IMissingPersonRequest) =>
  fetch('/api/submit/missing', {
    method: 'POST',
    body: JSON.stringify(data),
  });
