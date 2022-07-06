import { Button } from 'antd';

import './locations-header.scss';

export const LocationsHeader = () => {
  return (
    <div className="locations-header">
      <div className="locations-header_info">
        <div className="locations-header_info__title">Locations</div>
        <div className="locations-header_info__text">
          Create new users or update the existng users. You can then set their permissons here too.{' '}
        </div>
      </div>
      <Button className="locations-header_button" type="primary">
        Create Location
      </Button>
    </div>
  );
};
