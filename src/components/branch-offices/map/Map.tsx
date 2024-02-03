'use client'
import { Map, Marker, ZoomControl, Point } from "pigeon-maps"

const position: Point = [-25.31124, -57.58924]
const markers: Point[] = [
  [-25.31517, -57.57760],
  [-25.30668, -57.55289],
  [-25.34132, -57.49854],
]

export function MyMap() {
  return (
    <Map
      height={300}
      defaultCenter={position}
      defaultZoom={11}
      metaWheelZoom
    >
      <ZoomControl />
      {markers.map((m, i) => (
        <Marker
          key={i}
          width={50}
          anchor={m}
          color="#aa0502"
        />
      ))}
    </Map>
  )
}