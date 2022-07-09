// Source : https://codesandbox.io/s/antd-float-label-forked-k8p00?file=/Example.js

import { ChangeEvent, useState } from 'react';
import { Input } from 'antd';

import './float-input.scss';

type FloatInputProps = {
  label: string;
  value?: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  customClassName?: string;
};

export const FloatInput = (props: FloatInputProps) => {
  const [focus, setFocus] = useState(false);
  const { label, value, type, required, customClassName } = props;
  let { placeholder } = props;

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
      <Input onChange={(e) => props.onChange(e)} type={type} defaultValue={value} />
      <label className={labelClass}>
        {isOccupied ? label : placeholder} {requiredMark}
      </label>
    </div>
  );
};
