import { Button } from 'antd';
import { useAppDispatch } from '../../hooks/store-hooks';
import { openPopup, changePopupMode } from '../../store/slices/popup-slice';

import './locations-header.scss';

export const LocationsHeader = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="locations-header">
      <div className="locations-header_info">
        <div className="locations-header_info__title">Locations</div>
        <div className="locations-header_info__text">
          Create new users or update the existng users. You can then set their permissons here too.{' '}
        </div>
      </div>
      <Button
        type="primary"
        onClick={() => {
          dispatch(changePopupMode('create'));
          dispatch(openPopup());
        }}
      >
        Create Location
      </Button>
    </div>
  );
};
