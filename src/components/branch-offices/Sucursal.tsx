import { MyMap } from './map/Map'
import './styles.css'

export default function Sucursal() {

  return (
    <section className='container p-inline sucursal'>
      <h2>Sucursales más cercanas</h2>

      <MyMap />

    </section>
  )
};