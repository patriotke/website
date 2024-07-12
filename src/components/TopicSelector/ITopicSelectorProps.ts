export type ITopicOption = {
  label: string;
  value: string;
};
export type ITopicSelectorProps = {
  placeholder: string;
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  options: ITopicOption[];
};
