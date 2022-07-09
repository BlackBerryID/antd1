/* Menu */

type MenuButtonProps = {
  imageName: string;
  title: string;
};

/* Cards */

type UsersData = {
  name: string;
  surname: string;
  avatarURL?: string;
  color?: string;
}[];

type CardData = {
  country: string;
  users: {
    name: string;
    surname: string;
    avatarURL?: string;
    color?: string;
  }[];
};

type CardItemProps = {
  cardData: CardData;
  id: number;
};

type CreateLocationFormOutput = {
  'leave-quota-reset': string | undefined;
  'location-name': string | undefined;
  users: string[] | undefined;
  workweek: string[] | undefined;
  'is-default': boolean;
};

/* Popup */

type PopupMode = 'create' | 'confirm';

type PopupSliceInitialState = {
  isOpen: boolean;
  mode: PopupMode;
};
