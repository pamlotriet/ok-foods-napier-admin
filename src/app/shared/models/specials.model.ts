import { Guid } from "guid-typescript";
export interface SpecialsModel {
  id: Guid;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  type: string;
  expiration: Date;
}
