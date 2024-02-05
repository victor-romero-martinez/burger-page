import { TProduct } from "@/types/productType";
import { create } from "zustand";

type menuState = {
  isOpen: boolean;
  productModal: TProduct | null;
};

type menuAction = {
  handleDialog: () => void;
  addProductModal: (item: TProduct) => void;
};

export const useMenuStore = create<menuState & menuAction>()((set) => ({
  isOpen: false,
  productModal: null,

  handleDialog: () => set((state) => ({ isOpen: !state.isOpen })),
  addProductModal: (item) =>
    set(() => ({
      productModal: item,
    })),
}));
