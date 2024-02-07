'use client'
import dataSlide from '@/libs/data.slider.json'
import ImageGallery from 'react-image-gallery'

import './styles.css'


export default function Slider() {
  return (
    <div className='container p-inline'>

      <ImageGallery
        items={dataSlide}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        showNav={false}
        showBullets
        autoPlay
      />

    </div>
  )
};
