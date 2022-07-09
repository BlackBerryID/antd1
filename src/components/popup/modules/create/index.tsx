import { Form, Checkbox, Button } from 'antd';
import { useState } from 'react';
import { FloatInput } from '../float-input';
import { FloatSelect } from '../float-select';

import './create.scss';

export const Create = () => {
  const [locationName, setLocationName] = useState('');
  const [leaveQuotaResetBase, setLeaveQuotaResetBase] = useState('');

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

  const leaveQuotaOptions = ['Accounting Year', 'User Employment Date'];

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
      <Form.Item name="leave-quota-reset">
        <FloatSelect
          customClassName="popup-input_leave-quota"
          placeholder="Leave Quota Reset Based on"
          label="Leave Quota Reset Based on"
          value={leaveQuotaResetBase}
          onChange={(e) => {
            setLeaveQuotaResetBase(e);
          }}
          options={leaveQuotaOptions}
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">Create</Button>
      </Form.Item>
    </Form>
  );
};

export const createTitle = 'Create Location';
export const createWidth = 550;
