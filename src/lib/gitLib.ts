// eslint-disable-next-line import/no-extraneous-dependencies
import { Octokit } from 'octokit';

export const getOctokit = () =>
  new Octokit({
    auth: process.env.GITHUB_TOKEN!,
  });

/**
 * List branches
 */
export const listBranches = async () => {
  const url = `https://api.github.com/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/branches`;
  return fetch(url, {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  }).then((res) => res.json());
};

/**
 * Get branch
 * @param branchName
 */
export const getBranch = async (branchName: string) => {
  const url = `https://api.github.com/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/branches/${branchName}`;
  return fetch(url, {
    next: { revalidate: 0 },
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  }).then((res) => res.json());
};

/**
 * Create branch
 * @param branchName
 */
export const createBranch = async (branchName: string) => {
  const octokit = getOctokit();
  const sha = await getBranch('main').then((res) => res.commit.sha);
  // console.log('sha', sha);
  return octokit.request('POST /repos/{owner}/{repo}/git/refs', {
    sha,
    owner: process.env.GITHUB_OWNER!,
    repo: process.env.GITHUB_REPO!,
    ref: `refs/heads/${branchName}`,
  });
};

/**
 * Get blob
 * @param branchName
 * @param path
 */
export const getBlob = async (branchName: string, path: string) => {
  const url = `https://api.github.com/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/contents/${path}?ref=${branchName}`;
  return fetch(url, {
    next: { revalidate: 0 },
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  }).then((res) => res.json());
};

/**
 * Commit change
 * @param branchName
 * @param path
 * @param content
 */
export const commitChange = async (
  branchName: string,
  path: string,
  content: string | ArrayBuffer,
) => {
  const octokit = getOctokit();
  const sha = await getBlob(branchName, path)
    .then((res) => res.sha)
    .catch(() => getBranch(branchName).then((res) => res.commit.sha));
  // console.log('sha', sha);
  return octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
    owner: process.env.GITHUB_OWNER!,
    repo: process.env.GITHUB_REPO!,
    path,
    message: `Add ${path} ${new Date().toISOString()}`,
    content: Buffer.from(content).toString('base64'),
    branch: branchName,
    sha,
  });
};

/**
 * Create pull request
 * @param branchName
 */
export const createPullRequest = async (branchName: string) => {
  const octokit = getOctokit();
  return octokit.request('POST /repos/{owner}/{repo}/pulls', {
    owner: process.env.GITHUB_OWNER!,
    repo: process.env.GITHUB_REPO!,
    title: `Add ${branchName}`,
    body: `Add ${branchName}`,
    head: branchName,
    base: 'main',
  });
};
