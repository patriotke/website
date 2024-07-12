/**
 * Page Submit
 */
import Content from 'components/Content';
import SubmissionPane from 'components/SubmissionPane';
// import { commitChange } from 'lib/gitLib';

export default function Submit() {
  // const req = createBranch('submit-user-story');
  /* const req = commitChange(
    'submit-user-story',
    'uuid/123124234234/other-story.md',
    `This is another user story made at ${new Date().toISOString()}`,
  );
  // const req = getBlob('submit-user-story', 'user-story.md');
  req.then((res) => console.log(res)).catch((err) => console.error(err)); */

  return (
    <Content>
      <SubmissionPane />
    </Content>
  );
}
