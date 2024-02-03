import Image from 'next/image'
import './styles.css'

export default function MenuCard({
  img,
  title,
  details,
  price,
  nota
}: TMenuProps) {
  return (
    <article className='cart__product'>
      <Image src={img} alt={`menú item ${title}`} width={128} height={100} style={{
        objectFit: 'contain'
      }} />

      <h3>{title}</h3>

      <div className='cart__product__details'>
        <>
          {details.map((d, i) => (
            <span key={i}>{d}</span>
          ))}
        </>
        <span className='cart__product__details-price'>{price[0]} <span>{price[1]}</span></span>
        {nota && (<span className='cart__product__details-nota'>{nota}</span>)}
      </div>

    </article>
  )
};

type TMenuProps = {
  img: string,
  title: string,
  details: string[],
  price: string[]
  nota?: string
}