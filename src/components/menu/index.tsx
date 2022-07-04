import { Badge, Avatar } from 'antd';
import { MENU_ICON_BLUE } from '../../app/constants';
import './menu.scss';

export const Menu = () => {
  return (
    <nav className="menu">
      <button className="menu_button">
        <img src="./assets/svg/logo.svg" alt="logo" />
      </button>
      <div className="menu_button__wrapper">
        <button className="menu_button">
          <div className="menu_button__icon dashboard-icon"></div>
          <h2 className="menu_button__title">Dashboard</h2>
        </button>
        <button className="menu_button">
          <div className="menu_button__icon users-icon"></div>
          <h2 className="menu_button__title">Users</h2>
        </button>
        <button className="menu_button active">
          <div className="menu_button__icon settings-icon"></div>
          <h2 className="menu_button__title">Settings</h2>
        </button>
        <button className="menu_button">
          <div className="menu_button__icon pl-icon"></div>
          <h2 className="menu_button__title">{`P&L`}</h2>
        </button>
        <button className="menu_button">
          <div className="menu_button__icon vacation-manager-icon"></div>
          <h2 className="menu_button__title">Vacation Manager</h2>
        </button>
      </div>

      <button className="menu_user-info__notification">
        <Badge dot color={MENU_ICON_BLUE}>
          <div className="menu_user-info__icon"></div>
        </Badge>
      </button>
      <button>
        <Avatar
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: MENU_ICON_BLUE,
            width: '34px',
            height: '34px',
            marginTop: '28px',
            fontWeight: 600,
          }}
        >
          JS
        </Avatar>
      </button>
    </nav>
  );
};
