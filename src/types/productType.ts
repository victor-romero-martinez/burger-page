export type TProduct = {
  id?: number;
  discount?: string | null;
  img: string;
  title: string;
  details: string[];
  price: string[];
};

export type TProducts = TProduct[];

export type TLocation = {
  name: string;
  lat: number;
  lng: number;
};

export type TLocations = TLocation[];
