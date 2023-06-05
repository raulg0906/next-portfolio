import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import imageByIndexOT from './imagByIndexOT'
import './Carousel.css'
import Image from 'next/image'

const EcomEmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide flex justify-center" key={index}>
              <Image
                className="embla__slide__img"
                src={imageByIndexOT(index)}
                alt="OpenTableclone"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EcomEmblaCarousel
