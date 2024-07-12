/**
 *
 * TopicSelector
 *
 */

'use client';

import { ReactElement } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from 'components/ui/select';
import { ITopicSelectorProps } from 'components/TopicSelector/ITopicSelectorProps';

function TopicSelector({
  placeholder,
  label,
  value,
  onChange,
  options = [],
}: ITopicSelectorProps): ReactElement {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {label && <SelectLabel>{label}</SelectLabel>}
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default TopicSelector;
