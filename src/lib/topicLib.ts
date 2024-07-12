import { ITopicOption } from 'components/TopicSelector/ITopicSelectorProps';

// eslint-disable-next-line import/prefer-default-export
export const getTopics = (): ITopicOption[] => [
  {
    label: 'General',
    value: 'general',
  },
  {
    label: 'Missing Person',
    value: 'missing-person',
  },
  {
    label: 'Abductee',
    value: 'abductee',
  },
  {
    label: 'Govt Official Properties',
    value: 'govt-official-properties',
  },
  {
    label: 'Killer Cop',
    value: 'killer-cop',
  },
];
