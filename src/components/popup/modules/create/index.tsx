import { Form, Checkbox } from 'antd';
import { useState } from 'react';
import { FloatInput } from '../float-input';

import './create.scss';

export const Create = () => {
  const [locationName, setLocationName] = useState('');

  const onFinish = (values: number) => {
    console.log(values);
  };

  const workweekOptions = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return (
    <Form onFinish={onFinish}>
      <Form.Item name="location-name">
        <FloatInput
          customClassName="popup-input_location-name"
          placeholder="Location Name"
          label="Name"
          value={locationName}
          onChange={(e) => setLocationName(e.target.value)}
        />
      </Form.Item>
      <div className="popup-input_workweek">
        <div className="popup-input_workweek__title">Workweek</div>
        <Form.Item name="workweek">
          <Checkbox.Group options={workweekOptions} />
        </Form.Item>
      </div>
    </Form>
  );
};

export const createTitle = 'Create Location';
export const createWidth = 550;
