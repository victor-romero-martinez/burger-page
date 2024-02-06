'use client'
import { Map, Marker, ZoomControl, Point } from "pigeon-maps"
import Locations from "../locations/Locations"
import { usePositionStore } from "@/store/positionStore"
import sucursales from '@/libs/sucursales.local.json'

import './styles.css'

export function MyMap() {
  const { position } = usePositionStore()

  return (
    <div className="map__container">
      <Map
        height={300}
        center={[position.lat, position.lng]}
        defaultZoom={11}
        metaWheelZoom
      >
        <ZoomControl />
        {sucursales.map((m, i) => (
          <Marker
            key={i}
            width={50}
            anchor={[m.lat, m.lng]}
            color="#aa0502"
          />
        ))}
      </Map>
      <Locations markers={sucursales} />
    </div>
  )
}