/**
 *
 * SubmissionPane
 *
 */

'use client';

import SubmissionToolbar from 'components/SubmissionToolbar';
import { getTopics } from 'lib/topicLib';
import { useState } from 'react';
import MissingPersonForm from 'components/MissingPersonForm';

// type ISubmissionPaneProps = {
// onSubmit: () => void;
// };
function SubmissionPane() {
  const topics = getTopics();
  const [topic, setTopic] = useState('');

  const handleChange = (field: string, value: string) => {
    if (field === 'topic') {
      setTopic(value);
    }
  };
  return (
    <div>
      <SubmissionToolbar topics={topics} onChange={handleChange} />
      {(topic === 'missing-person' || true) && <MissingPersonForm />}
    </div>
  );
}

export default SubmissionPane;
