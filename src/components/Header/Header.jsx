import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styles from './Header.module.css'
import myImage4 from '../Header/img/Vector (1).svg'
import logo from '../Header/img/Group33721.svg'
import poisk from '../Header/img/poisk1.png'
import myImage2 from "../Main/img/Vector (3).svg"
import myImage3 from "../Main/img/Vector (2).svg"
import myImage from "../Main/img/Vector (4).svg";
import paket from "../Main/img/paket.svg";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const Header = () => {
    const [nav, setNav] = useState(false);
    const [korz, setKorz]= useState(false);
  
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const nav1 = {
      background: scrollPosition > 150 ? 'black' : 'transparent'
      // остальные стили вашего хедера...
    };
    const lv = {
      opacity: scrollPosition > 150 ? '100%' : '0'
      // остальные стили вашего хедера...
    };
  const [counter, setcounter] = useState(0);
    return (
      
<header >
<div style={nav1} className={styles.nav1}>
<div onClick={() => setNav(!nav)} className={styles.mobbt}>
   {nav ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35}  /> }
 </div>
 <div style={lv} className={styles.zag1}>lover<br />flower</div>
 <div onClick={() => setKorz(!korz)} className={styles.mobbt}>
   <div className={styles.kruzhochek}><p>{counter}</p></div>
   <img  className={styles.paket} src={paket} alt="" />
   
 </div>  
</div>
<div className={
     korz ? [styles.korz, styles.active2].join(' ') : [styles.korz]
   }>

   </div>
<div className={styles.container4}>

<div  className={
     nav ? [styles.menu, styles.active].join(' ') : [styles.menu]
   }> 

<div className={styles.headerline}> 
<img className={styles.logo4} src={logo} alt="My Image"/>

<div className={styles.poisk2}>
   {/* <img src={poisk} alt="123" /> */}
   <input type="text" placeholder='ПОИСК' />
</div>
<div className={styles.nav}>  
<div><a className={styles.navitem} href="/catalog"> КАТАЛОГ </a> </div>
<div><a className={styles.navitem} href="/asdas"> ДОСТАВКА И ОПЛАТА </a> </div>
<div><a className={styles.navitem} href="#">О НАС</a> </div>
<div><a className={styles.navitem} href="#">КОНТАКТЫ</a></div>
<div className={styles.sprava}>

 <div className={styles.sprava1}>
     <h3>zakaz@loverflower.by</h3>
     <span>Доставка 24/7 по договоренности <br /> с оператором</span>
</div>
<br />
<div className={styles.sprava2}>
     <h3>ул. Тимирязева 67</h3>
     <span>10:00 до 21:00
     без выходных</span>

  </div>
</div>
</div>


</div>


<div>
<span className={styles.liniya}></span>
</div>

<div className={styles.politika}>
Политика конфиденциальности <br />
Обработка персональных данных
</div>
<div className={styles.nomer111}>+375 (29) 113-69-69</div>
<div className={styles.iconics9}>
   <a href="#">
     <img src={myImage3} alt="21" className={styles.ic9} />
   </a>
   <a href="#">
     <img src={myImage} alt="12" className={styles.ic9} />
   </a>
   <a href="#">
     <img src={myImage2} alt="231" className={styles.ic} />
   </a>
 </div>
</div>     




</div>

</header>
      
      
  )
}

export default Header;
