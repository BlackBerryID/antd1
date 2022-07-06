/* Menu */

type MenuButtonProps = {
  imageName: string;
  title: string;
};

/* Cards */

type CardData = {
  country: string;
  users: {
    name: string;
    surname: string;
    avatarURL?: string;
  }[];
};

type CardItemProps = {
  cardData: CardData;
};
