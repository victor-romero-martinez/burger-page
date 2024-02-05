'use client'
import Image from 'next/image'
import { useMenuStore } from '@/store/useMenuStore'
import { TProduct } from '@/types/productType'
import './styles.css'

export default function MenuCard({ props }: { props: TProduct }) {
  const { handleDialog, addProductModal } = useMenuStore()

  /** add product to display and open modal */
  function handleClick() {
    addProductModal(props)
    handleDialog()
    return
  }

  return (
    <article className='cart__product' onClick={handleClick}>
      <Image src={props.img} alt={`menú item ${props.title}`} width={128} height={100} style={{
        objectFit: 'contain'
      }} />

      <h3>{props.title}</h3>

      <div className='cart__product__details'>
        <>
          {props.details.map((d, i) => (
            <span key={i}>{d}</span>
          ))}
        </>
        <span className='cart__product__details-price'>{props.price[0]} <span>{props.price[1]}</span></span>
        {props.nota && (<span className='cart__product__details-nota'>{props.nota}</span>)}
      </div>

    </article>
  )
};
