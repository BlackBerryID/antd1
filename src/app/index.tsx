import { Menu } from '../components/menu';
import { Submenu } from '../components/submenu';
import { Settings } from '../pages/settings';
import { ConfirmationPopup } from '../components/confirmation-popup';

import './app.scss';
import 'antd/dist/antd.min.css';

export const App = () => {
  return (
    <div className="app">
      <Menu />
      <Submenu />
      <Settings />
      <ConfirmationPopup />
    </div>
  );
};
