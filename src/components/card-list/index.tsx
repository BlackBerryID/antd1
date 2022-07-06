export const CardList = () => {
  const usersData = [
    {
      name: 'Mike',
      surname: 'Spencer',
      avatarURL: '../../../public/assets/png/avatars/avatar-Mike-Spencer.png',
    },
    {
      name: 'Ben',
      surname: 'Snolly',
    },
    {
      name: 'John',
      surname: 'Travelsy',
      avatarURL: '../../../public/assets/png/avatars/avatar-John-Travelsy.png',
    },
    {
      name: 'Nisha',
      surname: 'Aricson',
      avatarURL: '../../../public/assets/png/avatars/avatar-Nisha-Aricson.png',
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

  const cardsData = [
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
};
