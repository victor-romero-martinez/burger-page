import MenuCard from './menuCard/MenuCard'
import { MENUDATA } from '@/libs/data.'
import WeekendOffer from './offer/WeekendOffer'
import { descuentProduct, normalProduct } from '@/libs/productController'

import './styles.css'

const products = normalProduct(MENUDATA)
const promo = descuentProduct(MENUDATA)

export default function Menu() {

  return (
    <section className='w-full' id='menu'>
      <div className='menu-title w-full'>
        <span>Menú</span>
      </div>

      <div className='w-full container p-inline menu-items'>

        {products.map(m => (
          <div key={m.id}>
            <MenuCard props={m} />
          </div>
        ))}

        <div>
          <WeekendOffer props={promo[0]} />
        </div>

      </div>

    </section>
  )
}