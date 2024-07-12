/**
 *
 * SubmissionToolbar
 *
 */

'use client';

import TopicSelector from 'components/TopicSelector';
import { ITopicOption } from 'components/TopicSelector/ITopicSelectorProps';

type ISubmissionToolbarProps = {
  topics: ITopicOption[];
  onChange?: (field: string, value: string) => void;
};

function SubmissionToolbar({ topics, onChange }: ISubmissionToolbarProps) {
  const handleChange = (field: string) => (value: string) =>
    onChange?.(field, value);

  return (
    <div className="">
      <div className="py-2">
        <TopicSelector
          options={topics}
          placeholder="Select submission topic"
          label="Topic"
          onChange={handleChange('topic')}
        />
      </div>
    </div>
  );
}

export default SubmissionToolbar;
