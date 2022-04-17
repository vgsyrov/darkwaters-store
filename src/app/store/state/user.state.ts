export interface IUserState {
  name: string;
  role: string;
  shopSum: {
    value: number;
    defaultCurrency: string;
  };
}

export const userInitialState: IUserState = {
  name: 'Chosen One',
  role: 'Guest',
  shopSum: {
    value: 0,
    defaultCurrency: 'RUR',
  },
};
