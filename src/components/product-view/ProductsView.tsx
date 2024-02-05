import Image from 'next/image'
import { TProduct } from '@/types/productType'

import './styles.css'

export default function ProductViewModal({ props }: { props: TProduct }) {

  return (
    <article className='cart__product-modal'>
      <Image src={props.img} alt={`menú item ${props.title}`} width={128} height={100} style={{
        objectFit: 'contain'
      }} />

      <h3>{props.title}</h3>

      <div className='cart__product__details-modal'>
        <>
          {props.details.map((d, i) => (
            <span key={i}>{d}</span>
          ))}
        </>

        <span className='cart__product__details-price-modal'>
          {
            props.discount ? (
              <>
                <span className='normal-price'>{props.price[0]} </span>
                {props.discount}
              </>
            ) : (props.price[0])
          }
          <span> {props.price[1]}</span>
        </span>

        {props.nota && (<span className='cart__product__details-nota-modal'>{props.nota}</span>)}
      </div>

    </article>
  )
};
