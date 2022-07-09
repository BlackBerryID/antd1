import { Form } from 'antd';
import { useState } from 'react';
import { FloatInput } from '../float-input';

import './create.scss';

export const Create = () => {
  const [locationName, setLocationName] = useState('');
  return (
    <Form>
      <Form.Item>
        <FloatInput
          customClassName="popup-input_location-name"
          placeholder="Location Name"
          label="Name"
          value={locationName}
          onChange={(e) => setLocationName(e.target.value)}
        />
      </Form.Item>
    </Form>
  );
};

export const createTitle = 'Create Location';
export const createWidth = 550;
