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
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const dates = Array(31)
  .fill(' ')
  .map((_, index) => String(index + 1));

const timeZones = [
  '(GMT+02:00) Vilnius',
  '(GMT+03:00) Khartoum',
  '(GMT+03:00) Nairobi',
  '(GMT+03:00) Syowa',
  '(GMT+03:00) Baghdad',
  '(GMT+03:00) Qatar',
  '(GMT+03:00) Riyadh',
  '(GMT+03:00) Minsk',
];

export const Create = () => {
  const [locationName, setLocationName] = useState('');
  const [leaveQuotaResetBase, setLeaveQuotaResetBase] = useState('');
  const [users, setUsers] = useState('');
  const [month, setMonth] = useState('');
  const [date, setDate] = useState('');
  const [weekStartDay, setWeekStartDay] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const dispatch = useAppDispatch();

  const onFinish = (values: CreateLocationFormOutput) => {
    dispatch(addCard(values));
  };

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

      <div className="popup-input_leave-quota-wrapper">
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
        <InfoTooltip title="This setting will determine if your leave balance will be reset based on the accounting year (company's fiscal year) or based on the employee's start date. Besides quotas, your roll-over policy will also be affected according to this setting." />
      </div>

      <div className="popup-input_fiscal-year-wrapper">
        <Form.Item name="fiscal-year-month">
          <FloatSelect
            customClassName="popup-input_fiscal-year__month"
            placeholder="Month"
            label="Fiscal Year Start"
            value={month}
            onChange={(e) => {
              setMonth(e);
            }}
            options={months}
          />
        </Form.Item>
        <Form.Item name="fiscal-year-date">
          <FloatSelect
            customClassName="popup-input_fiscal-year__date"
            placeholder="Date"
            label=""
            value={date}
            onChange={(e) => {
              setDate(e);
            }}
            options={dates}
          />
        </Form.Item>
      </div>

      <div className="popup-input_expiry-date__wrapper">
        <Form.Item className="popup-input_expiry-date" name="expiry-date" valuePropName="checked">
          <Checkbox>No Brought Forward Expiry Date</Checkbox>
        </Form.Item>
        <InfoTooltip title="Each year, the user's rolled over leaves will expire on the date you set. The quotas for each leave type are configured through the Leave Types section for this location and each can be set individually to allow or not allow roll overs." />
      </div>

      <Form.Item name="week-starts-on">
        <FloatSelect
          customClassName="popup-input_week-starts-on"
          placeholder="Week Starts on"
          label="Week Starts on"
          value={weekStartDay}
          onChange={(e) => {
            setWeekStartDay(e);
          }}
          options={['Sunday', 'Monday']}
        />
      </Form.Item>

      <div className="popup-input_time-zone-wrapper">
        <Form.Item name="time-zone">
          <FloatSelect
            customClassName="popup-input_time-zone"
            placeholder="Time Zone"
            label="Time Zone"
            value={timeZone}
            onChange={(e) => {
              setTimeZone(e);
            }}
            options={timeZones}
            required
          />
        </Form.Item>
        <InfoTooltip title="This default time zone is used throughout the system. For example for accurately displaying leave information in the calendar and for the system events listed in the Logs." />
      </div>

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

      <div className="popup-input_is-default__wrapper">
        <Form.Item className="popup-input_is-default" name="is-default" valuePropName="checked">
          <Checkbox>Make This Location Default</Checkbox>
        </Form.Item>
        <InfoTooltip title="By making this Location the default one, all new team members will be automatically added to this Location." />
      </div>

      <div className="leave-policy">
        Once you've created a Location, assign a <span>Leave Policy</span> to the Location, in order
        to enable Users to request Leave. To assign a Leave Policy, go to Location {'>'} Leave
        Policies {'>'} Assign Leave Policy.
      </div>

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
