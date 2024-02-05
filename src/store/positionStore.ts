import { TLocation } from "@/types/productType";
import { create } from "zustand";

type position = {
  position: TLocation;
};

type positionAction = {
  updatePosition: (newPosition: TLocation) => void;
};

export const usePositionStore = create<position & positionAction>()((set) => ({
  position: {
    name: "init",
    lat: -25.31517,
    lng: -57.5776,
  },

  updatePosition: (newPosition) =>
    set(() => ({
      position: newPosition,
    })),
}));
