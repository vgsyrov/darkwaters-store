/*export interface IProduct {
  _id: string;
  feedbacksCount: number;
  subCategory: string;
  image: string;
  name: string;
  price: number;
  rating: number;
  status: number;
}*/

export interface Product {
  id?:string;
  code?:string;
  name?:string;
  description?:string;
  price?:number;
  quantity?:number;
  inventoryStatus?:string;
  category?:string;
  image?:string[];
  rating?:number;
  feedbacksCount?: number;
}
