import Image from 'next/image'
import './styles.css'

export default function DiscoverCombo() {
  return (
    <section className='w-full discover-section'>
      <div className='container p-inline discover'>
        <Image src='https://i.pinimg.com/736x/92/18/db/9218dbef44aed6211c6c120d99361364.jpg' alt='' width={256} height={380} />
        <div>
          <h3>Ricos y crocantes Buckets</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum voluptatem, ut eius dolores laboriosam dolorum nostrum id, placeat architecto animi. Numquam accusantium minus veniam dolor quod minima nemo qui!</p>
        </div>
      </div>
      <div className='discover-bg'></div>
    </section>
  )
}