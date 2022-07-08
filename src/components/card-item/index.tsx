import { Card, Button, Avatar } from 'antd';
import { MENU_ICON_BLUE } from '../../app/constants';

import './card-item.scss';

export const CardItem = ({ cardData: { country, users } }: CardItemProps) => {
  const numberAvatarsToShow = users.length - 6 > 9 ? 6 : 7;
  return (
    <Card className="card default">
      <h2 className="card_title">{country}</h2>
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
          marginLeft: '-10px',
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
