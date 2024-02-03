import Image from 'next/image'

import './styles.css'

export default function HeroSection() {
  return (
    <section className='w-full p-block hero' id='home'>
      <article className='container p-inline'>
        <div className='hero__inner'>
          <h3>
            <span>¿HAMBRE DE PROMOS</span>
            <span className='txt-shadow big-txt'>MARTES</span>
            <span className='big-txt'>PAGÁ 8</span>
            <span>PIEZAS Y</span>
            <span className='txt-shadow'>LLEVÁ <span className='txt-shadow big-txt'>12</span></span>
            <span>85.000 <span>GS.</span></span>
          </h3>
          <picture>
            <Image
              src={'/assets/image1.webp'}
              alt='promo picture'
              fill
              property='true' />
          </picture>
        </div>
      </article>
    </section>
  )
};