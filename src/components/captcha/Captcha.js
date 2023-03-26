import React,{useState,useEffect} from 'react';
import './captcha-style.css';
import refresh from '../../asset/img/refresh.png';
import Wcaptcha from '../error-handler/wrong-captcha';

const Captcha = () => {
  const captchaString = 'abcd1234';
  const generateCaptcha = ()=>{
    let captchaText = ""
    for (let index = 0; index < 6; index++) {
      captchaText+=captchaString[Math.floor(Math.random()*captchaString.length)];
    }
    return captchaText;
  }

  const [userCaptcha, setUserCaptcha] = useState('');
  const [captcha,setCaptcha] = useState(generateCaptcha())
  const [captchaMatched,setCaptchaMatched] = useState(false);
  const [showCheckButton,setShowCheckButton]  = useState(false);


  const handleCaptcha = () => {
    setCaptcha(generateCaptcha());
  };

  const handleCompareCaptcha = ()=>{
    if(userCaptcha === captcha){
      setCaptchaMatched(true);
    }else{
      setCaptchaMatched('failed');
    }
  }

  const handleCaptchaText = (e) =>{
    if(e.target.value){
      setShowCheckButton(true);
    }else{
      setShowCheckButton(false);
    }
    setUserCaptcha(e.target.value)
  }

  useEffect(()=>{
    if(captchaMatched === 'failed'){
      setCaptcha(generateCaptcha());
      setUserCaptcha('');
      setShowCheckButton(false)
      const captchaTimer = setTimeout(()=>{
        setCaptchaMatched(false);
        clearTimeout(captchaTimer);
      },3000)
    }
  },[captchaMatched])

  return (
    <>
    {
      captchaMatched && captchaMatched!== 'failed'?
      <div>
        <h2 className='captcha-text'>Captcha Matched !!!</h2>
      </div>
      :
    <div className='captcha-container'>
        {captchaMatched === 'failed'?<Wcaptcha/>:''}
        <div className='captcha-header'><h1>Enter Captcha</h1></div>
        <div className='captcha-display'>
            <div className='captcha-img'>
              <h2 className='captcha-text'> {captcha}</h2>
            </div><button className='refresh' onClick={handleCaptcha}><img src={refresh}></img></button>
        </div>
        <div className='captcha-enter'>
            <input type='text' value={userCaptcha} onChange={handleCaptchaText}></input> 
            {showCheckButton && <button onClick={handleCompareCaptcha} className="captcha-check">check</button>}
        </div>
    </div>
  }
    </>
  )
}

export default Captcha
