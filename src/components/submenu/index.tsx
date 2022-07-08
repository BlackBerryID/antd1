import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { toggleSubmenuState, toggleSubmenuWidth } from '../../store/slices/submenu-slice';
import { SUBMENU_ANIMATION_TIME } from '../../app/constants';
import './submenu.scss';

export const Submenu = () => {
  const { active, submenuWidth } = useAppSelector((state) => state.submenu);
  const dispatch = useAppDispatch();

  const toggleSubmenu = () => {
    if (active) {
      dispatch(toggleSubmenuState());
      setTimeout(() => {
        dispatch(toggleSubmenuWidth());
      }, SUBMENU_ANIMATION_TIME);
    } else {
      dispatch(toggleSubmenuWidth());
      setTimeout(() => {
        dispatch(toggleSubmenuState());
      }, SUBMENU_ANIMATION_TIME);
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
      <button className="submenu_arrow-back" onClick={() => toggleSubmenu()}>
        <div
          className="submenu_arrow-back__icon"
          style={{ transform: `rotate(${active ? 0 : 180}deg)` }}
        ></div>
      </button>
    </section>
  );
};
