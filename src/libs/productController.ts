import type { TProducts } from "@/types/productType";

/** Con descuento */
export function descuentProduct(arr: TProducts) {
  return arr.filter((d) => d.discount !== null);
}

/** Sin descuento */
export function normalProduct(arr: TProducts) {
  return arr.filter((d) => d.discount === null);
}
