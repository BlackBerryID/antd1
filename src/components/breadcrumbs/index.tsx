import { Breadcrumb } from 'antd';

import './breadcrumbs.scss';

export const Breadcrumbs = () => {
  return (
    <Breadcrumb className="breadcrumb" separator=">">
      <Breadcrumb.Item className="breadcrumb_item breadcrumb_root-item">
        {/* <div className="breadcrumb_item__icon"></div> */}
        Settings
      </Breadcrumb.Item>
      <Breadcrumb.Item className="breadcrumb_item">Vacation Manager</Breadcrumb.Item>
    </Breadcrumb>
  );
};
