import { CardItem } from '../card-item';
import { MENU_ICON_BLUE, VIOLET } from '../../app/constants';

import './card-list.scss';

export const CardList = () => {
  const usersData = [
    {
      name: 'Mike',
      surname: 'Spencer',
      avatarURL: './assets/svg/avatars/avatar-Mike-Spencer.svg',
    },
    {
      name: 'Ben',
      surname: 'Snolly',
      color: MENU_ICON_BLUE,
    },
    {
      name: 'John',
      surname: 'Travelsy',
      avatarURL: './assets/svg/avatars/avatar-John-Travelsy.svg',
    },
    {
      name: 'Nisha',
      surname: 'Aricson',
      avatarURL: './assets/svg/avatars/avatar-Nisha-Aricson.svg',
    },
    {
      name: 'Helen',
      surname: 'Malkolm',
      color: VIOLET,
    },
    {
      name: 'Jane',
      surname: 'Salivan',
      avatarURL: './assets/svg/avatars/avatar-Jane-Salivan.svg',
    },
    {
      name: 'Kris',
      surname: 'Manson',
      avatarURL: './assets/svg/avatars/avatar-Kris-Manson.svg',
    },
    {
      name: 'Luiza',
      surname: 'Shelbalm',
      avatarURL: './assets/svg/avatars/avatar-Luiza-Shelbalm.svg',
    },
    {
      name: 'Sam',
      surname: 'Tumb',
      avatarURL: './assets/svg/avatars/avatar-Sam-Tumb.svg',
    },
  ];

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

  const addRandomUsers = (amount: number) => {
    const arr = [];
    const usersAmount = amount;
    for (let i = 0; i < usersAmount; i++) {
      const randomIndex = getRandomInt(0, usersData.length);
      arr.push(usersData[randomIndex]);
    }
    return arr;
  };

  const cardsData: CardData[] = [
    {
      country: 'Australia',
      users: [
        usersData[0],
        usersData[1],
        usersData[2],
        usersData[0],
        usersData[3],
        usersData[4],
        usersData[2],
        usersData[5],
        usersData[6],
        ...addRandomUsers(4),
      ],
    },
    {
      country: 'Belarus',
      users: [usersData[0], usersData[1], usersData[2], usersData[0], usersData[4]],
    },
    {
      country: 'USA',
      users: [
        usersData[0],
        usersData[1],
        usersData[2],
        usersData[0],
        usersData[3],
        usersData[4],
        usersData[7],
        usersData[6],
        usersData[8],
        ...addRandomUsers(73),
      ],
    },
    {
      country: 'Canada',
      users: [usersData[1], usersData[3]],
    },
  ];

  return (
    <section className="card-list">
      {cardsData.map((cardData, index) => (
        <CardItem cardData={cardData} key={index} />
      ))}
    </section>
  );
};
