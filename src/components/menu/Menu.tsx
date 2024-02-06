import MenuCard from './menuCard/MenuCard'
import WeekendOffer from './offer/WeekendOffer'
import { discountProduct, normalProduct } from '@/libs/productController'
import data from '@/libs/data.local.json'

import './styles.css'

const products = normalProduct(data)
const promo = discountProduct(data)

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