// Source : https://codesandbox.io/s/antd-float-label-forked-k8p00?file=/Example.js

import { useState } from 'react';
import { Select } from 'antd';
import Icon from '@ant-design/icons';
import { topDownArrowsIcon } from '../../../../icons/top-down-arrows';
import { infoIcon } from '../../../../icons/info';

import './float-select.scss';

type FloatSelectProps = {
  label: string;
  value?: string;
  placeholder: string;
  required?: boolean;
  onChange: (e: string) => void;
  customClassName?: string;
  options: string[];
  mode?: 'multiple' | 'tags';
};

export const FloatSelect = (props: FloatSelectProps) => {
  const [focus, setFocus] = useState(false);
  const { label, value, required, customClassName, options, mode } = props;
  let { placeholder } = props;
  const { Option } = Select;

  if (!placeholder) placeholder = label;

  const isOccupied = focus || (value && value.length !== 0);

  const labelClass = isOccupied ? 'label as-label' : 'label as-placeholder';

  const requiredMark = required ? <span className="text-danger">*</span> : null;

  return (
    <div
      className={`float-label ${customClassName}`}
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      {mode ? (
        <Select onChange={(e) => props.onChange(e)} defaultValue={value} mode={mode}>
          {options.map((option, index) => (
            <Option value={option} key={index}>
              {option}
            </Option>
          ))}
        </Select>
      ) : (
        <Select
          onChange={(e) => props.onChange(e)}
          defaultValue={value}
          suffixIcon={<Icon component={topDownArrowsIcon} />}
        >
          {options.map((option, index) => (
            <Option value={option} key={index}>
              {option}
            </Option>
          ))}
        </Select>
      )}

      <label className={labelClass}>
        {isOccupied ? label : placeholder} {requiredMark}
      </label>
    </div>
  );
};
