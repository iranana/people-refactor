export type Person = {
  _id: string;
  name: string;
  age: number;
  gender: string;
  pet: string;
  favourite_color: string;
}

export type Filter = {
  gender: string;
  minAge: string;
  maxAge: string;
  pet: string;
}