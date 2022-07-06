import './submenu.scss';

export const SubMenu = () => {
  return (
    <section className="submenu">
      <h2 className="submenu_title">Settings</h2>
      <div className="submenu_item">
        <div className="submenu_item__icon general"></div>
        General
      </div>
      <div className="submenu_item active">
        <div className="submenu_item__icon vacation-manager"></div>
        Vacation Manager
      </div>
      <div className="submenu_options">
        <div className="submenu_option">
          <div className="submenu_option__text">Leave Types</div>
        </div>
        <div className="submenu_option active">
          <div className="submenu_option__text">Locations</div>
        </div>
      </div>
      <button className="submenu_arrow-back">
        <div className="submenu_arrow-back__icon"></div>
      </button>
    </section>
  );
};
