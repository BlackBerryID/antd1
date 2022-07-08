import { useState } from 'react';
import './submenu.scss';

const CLOSE_STATE_WIDTH = '12px';
const OPEN_STATE_WIDTH = '240px';

export const SubMenu = () => {
  const [active, setActive] = useState<boolean>(true);
  const [submenuWidth, setSubmenuWidth] = useState(OPEN_STATE_WIDTH);

  const toggleSubMenu = () => {
    if (active) {
      setActive(false);
      setTimeout(() => {
        setSubmenuWidth(CLOSE_STATE_WIDTH);
      }, 500);
    } else {
      setSubmenuWidth(OPEN_STATE_WIDTH);
      setTimeout(() => {
        setActive(true);
      }, 500);
    }
  };

  return (
    <section className={`submenu ${active ? 'active' : ''}`} style={{ width: submenuWidth }}>
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
      <button className="submenu_arrow-back" onClick={() => toggleSubMenu()}>
        <div
          className="submenu_arrow-back__icon"
          style={{ transform: `rotate(${active ? 0 : 180}deg)` }}
        ></div>
      </button>
    </section>
  );
};
