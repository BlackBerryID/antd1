import { Card, Button, Avatar } from 'antd';

import './card-item.scss';

export const CardItem = ({ cardData: { country, users } }: CardItemProps) => {
  const numberAvatarsToShow = users.length > 9 ? 6 : 7;
  return (
    <Card className="card">
      <h2 className="card_title">{country}</h2>
      <div className="holidays">
        <p className="holidays_title">Holidays</p>
        <Button type="link">View Holidays</Button>
      </div>
      <div className="leave-policies">
        <p className="leave-policies_title">View Leave Policies</p>
        <Button type="link">View Holidays</Button>
      </div>
      <Avatar.Group maxCount={numberAvatarsToShow} style={{ backgroundColor: 'green' }}>
        {users.map((user) =>
          user.avatarURL ? (
            <Avatar src={user.avatarURL} />
          ) : (
            <Avatar>
              {user.name[0].toUpperCase()}
              {user.name[0].toUpperCase()}
            </Avatar>
          )
        )}
      </Avatar.Group>
    </Card>
  );
};
