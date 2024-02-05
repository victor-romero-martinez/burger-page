'use client'
import { Map, Marker, ZoomControl, Point } from "pigeon-maps"
import Locations from "../locations/Locations"
import { usePositionStore } from "@/store/positionStore"

import './styles.css'

const markers = [
  { name: 'Av. Doctor Eusebio Ayala', lat: -25.31517, lng: -57.57760 },
  { name: 'Av. Madame Lynch', lat: -25.30668, lng: -57.55289 },
  { name: 'Av. Marical Estigarribia', lat: -25.34132, lng: -57.49854 },
]

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
        {markers.map((m, i) => (
          <Marker
            key={i}
            width={50}
            anchor={[m.lat, m.lng]}
            color="#aa0502"
          />
        ))}
      </Map>
      <Locations markers={markers} />
    </div>
  )
}