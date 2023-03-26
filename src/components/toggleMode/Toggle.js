import React,{useState,useEffect} from 'react'
import './toggle-style.css';

const Toggle = () => {
    const [lightMode,setlightMode] = useState(true);
    const [theme,setTheme] = useState('light-mode');

    const handlelightMode = (e) =>{
        setlightMode(!lightMode);
        // lightMode?setTheme('light-mode'):setTheme('dark-mode');
        setTheme(currentTheme=>{
          if(currentTheme == 'light-mode')return 'dark-mode'
          else return 'light-mode';
        })
    }

    useEffect(()=>{
        document.body.className = theme;
    },[theme])

  return (
    <div className='toggle-container'>
      <label className='switch'>
        <input type='checkbox' checked={lightMode} onChange={handlelightMode}/>
        <span className='slider'></span>
      </label>
    </div>
  )
}

export default Toggle
