import Image from 'next/image'
import { TProduct } from '@/types/productType'
import './styles.css'

export default function WeekendOffer({
  title,
  discount,
  price,
  details,
  img
}: TProduct) {
  return (
    <article className='offer__container'>
      <div className='offer__container-text'>
        <h4>Oferta Semanal</h4>
        <h3>{title}</h3>
        {details.map((d, i) => (
          <span key={i}>{d}</span>
        ))}
        <div>
          <span className='offer__container-price'>{price[0]}</span>
          <span className='offer__container-descount'>{discount} <span>{price[1]}</span></span>
        </div>
      </div>
      <div className='offer__container-image-container'>
        <div className='offer__container-background'></div>
        <Image src={img} alt="offer of the week" width={128} height={100} style={{
          objectFit: 'contain'
        }} />
      </div>
    </article>
  )
};
