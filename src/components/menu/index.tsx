import './menu.scss';

export const Menu = () => {
  return (
    <nav className="menu">
      <button className="menu_button">
        <img src="./assets/svg/logo.svg" alt="logo" />
      </button>
      <button className="menu_button">
        <div className="menu_button__icon dashboard-icon"></div>
        <h2 className="menu_button__title">Dashboard</h2>
      </button>
      <button className="menu_button">
        <div className="menu_button__icon users-icon"></div>
        <h2 className="menu_button__title">Users</h2>
      </button>
      <button className="menu_button">
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
    </nav>
  );
};
