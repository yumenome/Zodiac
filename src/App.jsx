import React from 'react'
import UserZodiacSign from './components/UserZodiacSign'
import wallpaper from './images/wallpaper.jpg'
import './App.css'
const App = () => {

  let [birthdate, setBirthdate] = React.useState([]);
  let [sign, setSign] = React.useState([]);
  const bdRef = React.useRef(null);
  
  
  const bod_sign = () => {
    const birthdate = bdRef.current.value;  
    setBirthdate(birthdate);
    const bod = new Date(birthdate);
    const day = bod.getDate();
    const month = bod.getMonth() + 1;

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19))
        return "Aries";
    else if ((month === 4 && day >= 20) || (month === 5 && day <= 20))
        return "Taurus";
    else if ((month === 5 && day >= 21) || (month === 6 && day <= 20))
        return "Gemini";
    else if ((month === 6 && day >= 21) || (month === 7 && day <= 22))
        return "Cancer";
    else if ((month === 7 && day >= 23) || (month === 8 && day <= 22))
        return "Leo";
    else if ((month === 8 && day >= 23) || (month === 9 && day <= 22))
        return "Virgo";
    else if ((month === 9 && day >= 23) || (month === 10 && day <= 22))
        return "Libra";
    else if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
        return "Scorpio";
    else if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
        return "Sagittarius";
    else if ((month === 12 && day >= 22) || (month === 1 && day <= 19))
        return "Capricorn";
    else if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
        return "Aquarius";
    else if ((month === 2 && day >= 19) || (month === 3 && day <= 20))
        return "Pisces";
    else
        prompt ("Invalid birth date.");
}

  const get_sign = () =>{

        sign = bod_sign();
        setSign(sign);
        document.getElementById("ans").style.display = "none";

  }

  return (
    <div>
      <img className="bg_img" src={wallpaper}/>
      <div className="main">
      <input type="date" ref={bdRef} onChange={get_sign} />
      {birthdate.length !== 0 && <UserZodiacSign sign={sign} />}
      </div>
    </div>
  )
}

export default App