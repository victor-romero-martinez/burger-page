'use client'
import Image from 'next/image'
import { TProduct } from '@/types/productType'
import { useMenuStore } from '@/store/useMenuStore'
import './styles.css'

export default function WeekendOffer({ props }: { props: TProduct }) {
  const { handleDialog, addProductModal } = useMenuStore()

  /** add product to display and open modal */
  function handleClick() {
    addProductModal(props)
    handleDialog()
    return
  }

  return (
    <article className='offer__container' onClick={handleClick}>
      <div className='offer__container-text'>
        <h4>Oferta Semanal</h4>
        <h3>{props.title}</h3>
        {props.details.map((d, i) => (
          <span key={i}>{d}</span>
        ))}
        <div>
          <span className='offer__container-price'>{props.price[0]}</span>
          <span className='offer__container-descount'>{props.discount} <span>{props.price[1]}</span></span>
        </div>
      </div>
      <div className='offer__container-image-container'>
        <div className='offer__container-background'></div>
        <Image src={props.img} alt="offer of the week" width={128} height={100} style={{
          objectFit: 'contain'
        }} />
      </div>
    </article>
  )
};
