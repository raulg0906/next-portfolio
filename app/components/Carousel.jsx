import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import imageByIndex from '../components/imageByIndex'
import './Carousel.css'
import Image from 'next/image'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide flex justify-center" key={index}>
              <Image
                className="embla__slide__img w-72"
                src={imageByIndex(index)}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
