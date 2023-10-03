
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';


const NextArrow = ({ onClick }) => {
    return (
        <div className='arrow__next' onClick={onClick}>
            <FaArrowRight style={{ color: '#AEFE14'}}/>
        </div>
    )
};

const PreviousArrow = ({ onClick }) => {
    return (
        <div className='arrow__previous' onClick={onClick}>
            <FaArrowLeft style={{ color: '#AEFE14'}}/>
        </div>
    )
};

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
  };

const Carousel = () => {
  return (
    <div>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div className={index == cardIndex ? "slide activeSlide" : "slide"} key={index}>
            {/* Render your card component here using the data from the card object */}
            <img src={img} alt={img}/>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel