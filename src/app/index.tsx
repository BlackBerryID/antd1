import { Menu } from '../components/menu';
import { SubMenu } from '../components/submenu';
import { Settings } from '../pages/settings';

import './app.scss';
import 'antd/dist/antd.min.css';

export const App = () => {
  return (
    <div className="app">
      <Menu />
      <SubMenu />
      <Settings />
    </div>
  );
};
