import './App.css';
import Toggle from './components/toggleMode/Toggle';
import Captcha from './components/captcha/Captcha';

function App() {
  return (
    <>
    <Toggle/>
    <div className='container'>
      <Captcha/>
    </div>
    </>
  );
}

export default App;
