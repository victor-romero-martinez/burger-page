'use client'
import Btn from "@/components/ui/btn/Btn";
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

          <Btn click={() => handlePosition(location)}>
            <MapPinIcon />
            <span>
              {location.name}
            </span>
          </Btn>

        </li>
      ))}
    </ul>
  )
};