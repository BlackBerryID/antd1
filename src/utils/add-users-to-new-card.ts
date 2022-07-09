export const addUsersToNewCard = (
  formOutput: CreateLocationFormOutput,
  usersData: UsersData
): UsersData => {
  if (formOutput.users === undefined) {
    return [];
  } else {
    return usersData.filter((userData) => {
      let flag = false;
      formOutput.users!.forEach((user) => {
        const [name, surname] = user.split(' ');
        if (name === userData.name && surname === userData.surname) flag = true;
      });
      return flag;
    });
  }
};
