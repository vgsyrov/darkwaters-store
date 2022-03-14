export interface IProduct {
  _id: string;
  feedbacksCount: number;
  subCategory: string;
  image: string;
  name: string;
  price: number;
  rating: number;
  status: number;
}

export const oneProduct: IProduct = {
  _id: 'ustanovocnyj-komplekt-swat-pac-f4',
  feedbacksCount: 4,
  subCategory: 'avtozvuk',
  image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/1662/a3745edb596fb06c4a9edebac53d4008/82328d1f0525af83cabebf2c3dae07378d4614ec8c9770d5748fb55a25d5b01b.jpg',
  name: 'Установочный комплект Swat PAC-F4',
  price: 34,
  rating: 4.25,
  status: 1,
};
