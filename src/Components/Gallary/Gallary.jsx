import React from 'react'
import './Gallary.css'
import img1 from '../../assets/gallery-1.avif'
import img2 from '../../assets/gallery-2.webp'
import img3 from '../../assets/gallery-3.jpg'
import img4 from '../../assets/gallery-4.webp'
const Gallary = () => {
  return (
    <div className='folder'>

      <div className='gallery'>
        <img src={img1} alt='' />
        <img src={img2} alt='' />
        <img src={img3} alt='' />
        <img src={img4} alt='' />
      </div>

      <div>
        <button className='btn1'>see more</button>
      </div>

    </div>
  )
}

export default Gallary
