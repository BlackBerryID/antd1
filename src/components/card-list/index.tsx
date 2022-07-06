import { CardItem } from '../card-item';

import './card-list.scss';

export const CardList = () => {
  const usersData = [
    {
      name: 'Mike',
      surname: 'Spencer',
      avatarURL: './assets/png/avatars/avatar-Mike-Spencer.svg',
    },
    {
      name: 'Ben',
      surname: 'Snolly',
    },
    {
      name: 'John',
      surname: 'Travelsy',
      avatarURL: './assets/png/avatars/avatar-John-Travelsy.svg',
    },
    {
      name: 'Nisha',
      surname: 'Aricson',
      avatarURL: './assets/png/avatars/avatar-Nisha-Aricson.svg',
    },
    {
      name: 'Helen',
      surname: 'Malkolm',
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
        ...addRandomUsers(6),
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
        ...addRandomUsers(76),
      ],
    },
  ];

  return (
    <section className="card-list">
      {cardsData.map((cardData) => (
        <CardItem cardData={cardData} />
      ))}
    </section>
  );
};
