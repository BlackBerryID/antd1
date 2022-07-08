export const calcNumberAvatarsToShow = (usersLength: number, isSubmenuOpen: boolean) => {
  const minNumberAvatars = 6;
  const maxNumberAvatars = 9;
  return isSubmenuOpen
    ? usersLength - minNumberAvatars > maxNumberAvatars
      ? minNumberAvatars
      : minNumberAvatars + 1
    : maxNumberAvatars;
};
