// eslint-disable-next-line import/prefer-default-export
export const someFn = () => {
  console.log('someFn');
  // do something
  return 'someFn';
};

const getJobs = (table) => {
  const jobs = [];
  // eslint-disable-next-line no-plusplus
  for (let r = 0, n = table.rows.length; r < n; r++) {
    // eslint-disable-next-line no-plusplus
    for (let c = 0, m = table.rows[r].cells.length; c < m; c++) {
      if (c === 3) jobs.push(table.rows[r].cells[c].innerText.toLowerCase());
    }
  }
  return jobs;
};

const groupCommonJobs = (jobs) => {};

const summarizeJobs = (jobs: string[]) =>
  jobs.reduce(
    (acc, job) => {
      if (acc[job]) {
        acc[job] += 1;
      } else {
        acc[job] = 1;
      }
      return acc;
    },
    {} as { [key: string]: number },
  );
