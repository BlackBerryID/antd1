import { Card, Button, Avatar, Dropdown, Menu } from 'antd';
import { useEffect, useState } from 'react';
import { MENU_ICON_BLUE, SUBMENU_ANIMATION_TIME, OPEN_STATE_WIDTH } from '../../app/constants';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { calcNumberAvatarsToShow } from '../../utils/calc-number-avatars-to-show';
import { changeCurrentCardIndex } from '../../store/slices/card-list-slice';
import { openPopup } from '../../store/slices/popup-slice';

import './card-item.scss';

export const CardItem = ({ cardData: { country, users }, id }: CardItemProps) => {
  const { submenuWidth } = useAppSelector((state) => state.submenu);
  const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false);
  const [numberAvatarsToShow, setNumberAvatarsToShow] = useState<number>(3);
  const dispatch = useAppDispatch();

  const menu = (
    <Menu
      items={[
        {
          label: <div className="card_dropdown-item__label">Edit</div>,
          key: '1',
          icon: <div className="card_dropdown-item__icon edit"></div>,
        },
        {
          label: <div className="card_dropdown-item__label">Set&nbsp;as&nbsp;Default</div>,
          key: '2',
          icon: <div className="card_dropdown-item__icon star"></div>,
        },
        {
          label: <div className="card_dropdown-item__label">Delete</div>,
          key: '3',
          icon: <div className="card_dropdown-item__icon delete"></div>,
          onClick: () => {
            dispatch(changeCurrentCardIndex(id));
            dispatch(openPopup());
          },
        },
      ]}
      style={{ padding: '8px 4px 3px', borderRadius: '6px' }}
    />
  );

  useEffect(() => {
    const isSubmenuOpen = submenuWidth === OPEN_STATE_WIDTH ? true : false;
    if (isSubmenuOpen) {
      setNumberAvatarsToShow(calcNumberAvatarsToShow(users.length, isSubmenuOpen));
    } else {
      setTimeout(() => {
        setNumberAvatarsToShow(calcNumberAvatarsToShow(users.length, isSubmenuOpen));
      }, SUBMENU_ANIMATION_TIME);
    }
  }, [submenuWidth]);

  return (
    <Card className="card default">
      <h2 className="card_title">{country}</h2>
      <Dropdown
        className={`card_dropdown ${isDropdownActive ? 'active' : ''}`}
        overlay={menu}
        trigger={['click']}
        placement="bottomRight"
        onVisibleChange={(visible) => setIsDropdownActive(visible)}
      >
        <div className="card_dropdown__icon-wrapper">
          <div className="card_dropdown__icon"></div>
        </div>
      </Dropdown>
      <div className="card_section">
        <div className="card_section_title">Holidays</div>
        <Button type="link">View Holidays</Button>
      </div>
      <div className="card_section">
        <div className="card_section_title">Leave Policies</div>
        <Button type="link">View Leave Policies</Button>
      </div>
      <Avatar.Group
        className="card_avatar-group"
        maxCount={numberAvatarsToShow}
        maxStyle={{
          color: MENU_ICON_BLUE,
          backgroundColor: 'transparent',
          fontSize: '14px',
          fontWeight: '600',
          marginLeft: '-8px',
        }}
      >
        {users.map((user, index) =>
          user.avatarURL ? (
            <Avatar src={user.avatarURL} key={index} />
          ) : (
            <Avatar style={{ backgroundColor: user.color }} key={index}>
              {user.name[0].toUpperCase()}
              {user.surname[0].toUpperCase()}
            </Avatar>
          )
        )}
      </Avatar.Group>
    </Card>
  );
};
