import React from "react";
import Header from "../Header/Header";
import styles from "./Catalog.module.css";
import cvetok1 from "./catalogimg/image 128.svg";
import cvetok2 from "./catalogimg/image 129.svg";
import el from "./catalogimg/Ellipse 44.svg";
import el3 from "./catalogimg/Ellipse 52.svg";
import el2 from "./catalogimg/Ellipse 31 (2).svg";
import myImage from "./img/Vector (4).svg";
import myImage3 from "./img/Vector (2).svg";
import myImage2 from "./img/Vector (3).svg";
import myImage43 from "./img/Vector(5).svg";
import cardimg1 from './catalogimg/card1.svg'
import Card from "./Card";

const arr =[
{
  title:' Лучший день',
  price:"169.00"
 
},


];  
const Catalog = () => {
  return (
    <>
      <div className={styles.wrapper}>
        {/* <img src={el2} className={styles.el2} alt="323" />
        <img src={el} className={styles.el1} alt="323" />
        <img src={el3} className={styles.el3} alt="323" />
        <img src={cvetok1} className={styles.cv1} alt="32" />
        <img src={cvetok2} className={styles.cv2} alt="32" /> */}

        <div className={styles.container}>
          <div className={styles.xaxa}>
            <div className={styles.text}>
              <div className={styles.title}>
                <div className={styles.cat1}>
                  каталог <br />
                </div>
                <div className={styles.buk1}>букетов </div>
              </div>
              <div className={styles.textik}>
                В нашем магазине самый большой выбор букетов для любых событий:
              </div>

              <div className={styles.btns}>
                <button>Букеты из гипсофил</button>
                <button>Букеты из ромашек</button>
                <button>Букеты из хризантем</button>
                <button>Комнатные цветы в горшках</button>
                <button>Монобукеты</button>
                <button>Сборные букеты</button>
                <button>Букет на праздник</button>
                <button>Композиции из цветов</button>
                <button>Конверты</button>
                <button>Открытки</button>
                <button>Подарки</button>
                <button>Букеты из сухоцветов</button>
                <button>Шары</button>
                <button>Популярное</button>
                <button>Букеты роз</button>
                <button>Упаковка подарков</button>
              </div>
            </div>
            <div className={styles.sprava}>
              <div className={styles.iconics}>
                <a href="#">
                  <img src={myImage3} alt="21" className={styles.ic} />
                </a>
                <a href="#">
                  <img src={myImage} alt="12" className={styles.ic} />
                </a>
                <a href="#">
                  <img src={myImage2} alt="231" className={styles.ic} />
                </a>
              </div>
              <div className={styles.nomer}>+375 (29) 113-69-69</div>
              <button className={styles.zvonok} name="ЗАКАЗАТЬ ЗВОНОК">
                <img src={myImage43} alt="" className={styles.zv} />
                заказать звонок
              </button>
            </div>
          </div>
          <div className={styles.tovar}>
            <div className={styles.sorter}>

              <div className={styles.pocvetu}>
                
                <h2>по цвету</h2>
                <ul >
                  <li>
                  <input type="checkbox" /><label >белый</label>
                  </li>
                  <li>
                  <input type="checkbox" /><label >желтый</label>
                  </li>
                  <li>
                  <input type="checkbox" /><label >красный</label>
                  </li>
                  <li>
                  <input type="checkbox" /><label >синий</label>
                  </li>
                  <li>
                  <input type="checkbox" /><label >розовый</label>
                  </li>
                   <li>
                  <input type="checkbox" /><label >оранжевый</label>
                  </li>
                  <li>
                  <input type="checkbox" /><label >фиолетовый</label>
                  </li>
                  <li>
                  <input type="checkbox" /><label >зелёный</label>
                  </li>
                </ul>
              </div>
              <div className={styles.pocvetu}>
                <h2>по формату</h2>
                <ul >
                  <li>
                  <input type="checkbox" /><label >букет</label>
                  </li>
                  <li>
                  <input type="checkbox" /><label >в вазе</label>
                  </li>
                  <li>
                  <input type="checkbox" /><label >в конверте</label>
                  </li>
                  <li>
                  <input type="checkbox" /><label >в корзине</label>
                  </li>
                  <li>
                  <input type="checkbox" /><label >в шляпной коробке</label>
                  </li>
                  <li>
                  <input type="checkbox" /><label >в ящике</label>
                  </li>
                </ul>
              </div>
              <div className={styles.pocvetu}>
                <h2>по цветку</h2>
                <ul className={styles.scroll} >
                  <li>
                  <input type="checkbox" /><label >аспарагус</label>
                  </li>
                  <li>
                  <input type="checkbox" /><label >антуриум</label>
                  </li>
                  <li>
                  <input type="checkbox" /><label >астильба</label>
                  </li>
                  <li>
                  <input type="checkbox" /><label >анстранция</label>
                  </li>
                  <li>
                  <input type="checkbox" /><label >гингко</label>
                  </li>
                  <li>
                  <input type="checkbox" /><label >гастерия</label>
                  </li>
                  <li>
                  <input type="checkbox" /><label >аспарагус</label>
                  </li>
                  <li>
                  <input type="checkbox" /><label >антуриум</label>
                  </li>
                  <li>
                  <input type="checkbox" /><label >астильба</label>
                  </li>
                  <li>
                  <input type="checkbox" /><label >анстранция</label>
                  </li>
                  <li>
                  <input type="checkbox" /><label >аспарагус</label>
                  </li>
                  <li>
                  <input type="checkbox" /><label >антуриум</label>
                  </li>
                  <li>
                  <input type="checkbox" /><label >астильба</label>
                  </li>
                  <li>
                  <input type="checkbox" /><label >анстранция</label>
                  </li>
                  <li>
                  <input type="checkbox" /><label >гингко</label>
                  </li>
                  <li>
                  <input type="checkbox" /><label >гастерия</label>
                  </li>
                  <li>
                  <input type="checkbox" /><label >аспарагус</label>
                  </li>
                  <li>
                  <input type="checkbox" /><label >антуриум</label>
                  </li>
                  <li>
                  <input type="checkbox" /><label >астильба</label>
                  </li>
                  <li>
                  <input type="checkbox" /><label >анстранция</label>
                  </li>
                </ul>
              </div>  
            </div>

            <div className={styles.cards}>
              {arr.map((obj) =>(<Card
               title={obj.title} 
               price={obj.price} 
        
               />   )
              
              )}
                       
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
