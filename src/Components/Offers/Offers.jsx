import React from 'react'
import './Offers.css'
import para1 from '../../assets/apar1.webp'
import para2 from '../../assets/apar2.webp'
import para3 from '../../assets/apar3.jpg'
function Offers() {
  return (
    
    <div className='offers'>
    

        <div className='offer'>
            <img src={para1} />
            <div className='caption'>Check it now</div>
        </div>

        <div className='offer'>
            <img src={para2} />
            <div className='caption'>Check it now</div>
        </div>

        <div className='offer'>
            <img src={para3} />
            <div className='caption'>Check it now</div>
        </div>

    </div>
  )
}

export default Offers
