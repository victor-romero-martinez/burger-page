'use client'
import { MapPinIcon } from "@/icons/Icons";
import { usePositionStore } from "@/store/positionStore";
import { TLocations, TLocation } from "@/types/productType";

export default function Locations({ markers }: { markers: TLocations }) {
  const { updatePosition } = usePositionStore()

  function handlePosition(p: TLocation) {
    return updatePosition(p)
  }

  return (
    <ul>
      {markers.map((location, i) => (
        <li key={i}>
          <button
            type="button"
            onClick={() => handlePosition(location)}
          >
            <MapPinIcon width='16' height='16' />
            <span>
              {location.name}
            </span>
          </button>
        </li>
      ))}
    </ul>
  )
};