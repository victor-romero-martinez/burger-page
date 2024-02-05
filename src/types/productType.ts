export type TProduct = {
  id?: number;
  link_to_buy: string;
  discount?: string | null;
  qr: string;
  img: string;
  title: string;
  details: string[];
  price: string[];
  nota?: string;
};

export type TProducts = TProduct[];

export type TLocation = {
  name: string;
  lat: number;
  lng: number;
};

export type TLocations = TLocation[];
