import { IoIosStarOutline, IoIosStar, IoIosStarHalf } from 'react-icons/io'

const Rating = ({ value, text }) => {
  return (
    <div className='rating'>
      <span>
        {value >= 1 ? <IoIosStar /> : value >= 0.5 ? <IoIosStarHalf /> : <IoIosStarOutline />}
      </span>
      <span>
        {value >= 2 ? <IoIosStar /> : value >= 1.5 ? <IoIosStarHalf /> : <IoIosStarOutline />}
      </span>
      <span>
        {value >= 3 ? <IoIosStar /> : value >= 2.5 ? <IoIosStarHalf /> : <IoIosStarOutline />}
      </span>
      <span>
        {value >= 4 ? <IoIosStar /> : value >= 3.5 ? <IoIosStarHalf /> : <IoIosStarOutline />}
      </span>
      <span>
        {value >= 5 ? <IoIosStar /> : value >= 4.5 ? <IoIosStarHalf /> : <IoIosStarOutline />}
      </span>
      <span className='rating-text'>{ text && text}</span>
    </div>
  )
}

export default Rating


