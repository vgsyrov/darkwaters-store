export interface IUser {
  name: string;
  role: string;
  shopSum: {
    value: number;
    defaultCurrency: string;
  };
}
