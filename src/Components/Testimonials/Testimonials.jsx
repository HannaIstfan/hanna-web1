import React, { useRef } from 'react'
import './Testimonials.css'
import back from'../../assets/back-icon.png'
import next from '../../assets/next-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'
const Testimonials = () => {
    const slider =useRef();
    let tx =0;
const slideForward =()=>{
    if(tx > -50){tx -=25}
        
    slider.current.style.transform=`translateX(${tx}%)`

}
const slideBackward =()=>{
    if(tx < 0){tx +=25}
        
    slider.current.style.transform=`translateX(${tx}%)`

}

  return (
    <div className='testimonials'>
      <img src={next} className='next-btn' onClick={slideForward}/>
      <img src={back} className='back-btn' onClick={slideBackward}/>
      <div className='slider'>
        <ul ref={slider}>
            <li>
            <div className='slide'>
                <div className='user-info'>
                    <img src={user1}/>
                    <div>
                        <h3>efef rwr</h3>
                        <span> efwef ,wef</span>
                    </div>
                </div>
                <p>
                    wfaaaaafawffffffffffwakm;lkmlksnlgm;km
                    lsk;lm;lm;lgmsmlkjlkgmsg
                    ;lks;elfkok;lk;,;semmk;s/GALLERY;lm;lmakem;m
                    kpklmk;lm;lkmsef
                    kpokpokpo;m;mnjnlkmsegf
                    ,;l,;lsmege
                </p>
                </div>   
            </li>

            <li>
            <div className='slide'>
                <div className='user-info'>
                    <img src={user2}/>
                    <div>
                        <h3>efef rwr</h3>
                        <span> efwef ,wef</span>
                    </div>
                </div>
                <p>
                    wfaaaaafawffffffffffwakm;lkmlksnlgm;km
                    lsk;lm;lm;lgmsmlkjlkgmsg
                    ;lks;elfkok;lk;,;semmk;s/GALLERY;lm;lmakem;m
                    kpklmk;lm;lkmsef
                    kpokpokpo;m;mnjnlkmsegf
                    ,;l,;lsmege
                </p>
                </div>   
            </li>

            <li>
            <div className='slide'>
                <div className='user-info'>
                    <img src={user3}/>
                    <div>
                        <h3>efef rwr</h3>
                        <span> efwef ,wef</span>
                    </div>
                </div>
                <p>
                    wfaaaaafawffffffffffwakm;lkmlksnlgm;km
                    lsk;lm;lm;lgmsmlkjlkgmsg
                    ;lks;elfkok;lk;,;semmk;s/GALLERY;lm;lmakem;m
                    kpklmk;lm;lkmsef
                    kpokpokpo;m;mnjnlkmsegf
                    ,;l,;lsmege
                </p>
                </div>   
            </li>

            <li>
            <div className='slide'>
                <div className='user-info'>
                    <img src={user4}/>
                    <div>
                        <h3>efef rwr</h3>
                        <span> efwef ,wef</span>
                    </div>
                </div>
                <p>
                    wfaaaaafawffffffffffwakm;lkmlksnlgm;km
                    lsk;lm;lm;lgmsmlkjlkgmsg
                    ;lks;elfkok;lk;,;semmk;s/GALLERY;lm;lmakem;m
                    kpklmk;lm;lkmsef
                    kpokpokpo;m;mnjnlkmsegf
                    ,;l,;lsmege
                </p>
                </div>   
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
