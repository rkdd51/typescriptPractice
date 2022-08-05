export interface Address {
  area: string;
  pincode: number;
  building: string;
}
export interface User {
  name: string;
  place: string;
  age: number;
  address: Address;
}
