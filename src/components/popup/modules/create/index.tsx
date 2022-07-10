import { Form, Checkbox, Button, ButtonProps } from 'antd';
import { useState } from 'react';
import { FloatInput } from '../float-input';
import { FloatSelect } from '../float-select';
import { USERS_DATA } from '../../../../app/constants';
import { addCard } from '../../../../store/slices/card-list-slice';
import { useAppDispatch } from '../../../../hooks/store-hooks';
import { closePopup } from '../../../../store/slices/popup-slice';
import { InfoTooltip } from '../info-tooltip';

import './create.scss';

export const Create = () => {
  const [locationName, setLocationName] = useState('');
  const [leaveQuotaResetBase, setLeaveQuotaResetBase] = useState('');
  const [users, setUsers] = useState('');
  const dispatch = useAppDispatch();

  const onFinish = (values: CreateLocationFormOutput) => {
    dispatch(addCard(values));
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
  const usersOptions = USERS_DATA.map((userData) => userData.name + ' ' + userData.surname);

  return (
    <Form onFinish={onFinish}>
      <Form.Item name="location-name">
        <FloatInput
          customClassName="popup-input_location-name"
          placeholder="Location Name"
          label="Name"
          value={locationName}
          onChange={(e) => setLocationName(e.target.value)}
          required
        />
      </Form.Item>
      <div className="popup-input_workweek">
        <div className="popup-input_workweek__title">Workweek</div>
        <Form.Item name="workweek">
          <Checkbox.Group options={workweekOptions} />
        </Form.Item>
      </div>
      <Form.Item className="popup-input_leave-quota-wrapper" name="leave-quota-reset">
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
        <InfoTooltip title="This setting will determine if your leave balance will be reset based on the accounting year (company's fiscal year) or based on the employee's start date. Besides quotas, your roll-over policy will also be affected according to this setting." />
      </Form.Item>
      <Form.Item name="users">
        <FloatSelect
          customClassName="popup-input_add-users"
          placeholder="Add users"
          label="Users"
          value={users}
          onChange={(e) => {
            setUsers(e);
          }}
          options={usersOptions}
          mode="tags"
        />
      </Form.Item>
      <Form.Item name="is-default" valuePropName="checked">
        <Checkbox>Make This Location Default</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" onClick={() => dispatch(closePopup())}>
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export const createTitle = 'Create Location';
export const createWidth = 550;
export const createOkButtonProps: ButtonProps = {
  style: {
    display: 'none',
  },
};
