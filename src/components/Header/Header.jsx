import React from 'react'
import styles from './Header.module.css'
import myImage4 from '../Header/img/Vector (1).svg'
import logo from '../Header/img/Group33721.svg'
import poisk from '../Header/img/poisk1.png'

const Header = () => {
  return (
      
    <header>
      
        <div className={styles.container}>

         
              <img className={styles.logo} src={logo} alt="My Image"/>
       
          <div className={styles.headerline}> 
          

          
           
            <div className={styles.nav}>  
             <a className={styles.navitem} href="#"> КАТАЛОГ </a>
             <a className={styles.navitem} href="#"> ДОСТАВКА И ОПЛАТА </a>
             <a className={styles.navitem} href="#">О НАС</a>
             <a className={styles.navitem} href="#">КОНТАКТЫ</a>
             </div>
             <div className={styles.poisk2}>
                <img src={poisk} alt="123" />
                <input type="text" placeholder='ПОИСК' />
             </div>
             
          <div className={styles.sprava}>

              <div className={styles.sprava1}>
                  <h3>zakaz@loverflower.by</h3>
                  <span>Доставка 24/7 по договоренности с оператором</span>
             </div>
             <div className={styles.sprava2}>
                  <h3>ул. Тимирязева 67</h3>
                  <span>10:00 до 21:00
                  без выходных</span>

               </div>
          </div>
         
            
              

           </div>
      </div>        
         

   

    
   
       
     </header>
      
      
  )
}

export default Header;
