import React from "react";
import styles from "./Main.module.css";
import myImage from "./img/Vector (4).svg";
import myImage3 from "./img/Vector (2).svg";
import myImage2 from "./img/Vector (3).svg";
import myImage43 from "./img/Vector(5).svg";
import cartinka1 from "./img/Comp 10.png";
import cartinka2 from "./img/Comp 11.png";
import cartinka3 from "./img/Comp 12.png";
import logo from "./img/Group33721.svg";

const Main = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.prikol}>
          <div className={styles.zagolovok1}>
            
            lover<br />flower</div> 

          {/* <img src={myImage} alt="12"  /> */}
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
        </div>

        <div className={styles.sozdaem}>
          Создаём для тех, кто ценит свежесть и изящество цветка
        </div>
        <div className={styles.ikl}>
          <div className={styles.kn}>
            <button className={styles.smcatalog}> смотреть каталог </button>
          </div>

          <div className={styles.ups}>
            <div className={styles.nomer}>+7 (909) 76-20-944</div>
            <div className={styles.pups}>
              <div>
                <button className={styles.zvonok} name="ЗАКАЗАТЬ ЗВОНОК">
                  <img src={myImage43} alt="" className={styles.zv} />
                  заказать звонок
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.catalogbig}>каталог</div>
        <div className={styles.text1}>
          
          У нас самый большой выбор цветов, букетов, открыток и подарков.
          <br />
          Мы всегда поможем вам подобрать букет для вашего события, наш
          <br /> менеджер вас проконсультирует и поможет определиться с выбором
          <br />
          <br />
          <br />
          Ознакомьтесь c нашими разделами каталога
        </div>
        <div className={styles.blokiVse}>
          <div className={styles.blokiSleva}>
            <div className={styles.frame1}>
              <div className={styles.zg}> цветы </div>
              <ul className={styles.spisok0}>
                <li className={styles.frame1item}>Сборные букеты</li>
                <li className={styles.frame1item}>Монобукеты</li>
                <li className={styles.frame1item}>Композиции из цветов</li>
                <li className={styles.frame1item}>розы</li>
                <li className={styles.frame1item}>свадебные</li>
              </ul>
            </div>
          </div>
          <div className={styles.blokiSprava}>
            <div className={styles.frame2}>
              <div className={styles.zg}> готовые букеты из сухоцветов </div>
              <ul className={styles.spisok0}>
                <li className={styles.frame1item}>букеты</li>
                <li className={styles.frame1item}>для интерьера</li>
                <li className={styles.frame1item}>Композиции</li>
              </ul>
            </div>

            <div className={styles.frame3}>
              <div className={styles.zg}> дополнительно</div>
              <ul className={styles.spisok0}>
                <li className={styles.frame1item}>игрушки</li>
                <li className={styles.frame1item}>шары</li>
                <li className={styles.frame1item}>открытки</li>
                <li className={styles.frame1item}>упаковка</li>
              </ul>
            </div>
          </div>
        </div>

        
          <div className={styles.pop}>популярные</div>
          <div className={styles.buk1}>букеты</div>
          <div className={styles.samble}>
            Самые любимые композиции наших клиентов
          </div>
        
        <div className={styles.carts}>
          <div className={styles.cart1}>
            <div>
              <img className={styles.cartinka0} src="https://i.imgur.com/eLyGleY.png" alt="212" /> 
            </div>
            <div className={styles.denbl}>лучший день</div>
            <div className={styles.money}>167.00 ₽</div>
            <button className={styles.but2}>в корзину</button>
          </div>

          <div className={styles.cart1}>
            <div>
              <img className={styles.cartinka0} src={cartinka2} alt="212" /> 
            </div> 
            <div className={styles.denbl}>лучший день</div>
            <div className={styles.money}>167.00 ₽</div>
            <button className={styles.but2}>в корзину</button>
          </div>
          <div className={styles.cart1}>
           <img className={styles.cartinka0} src={cartinka3} alt="212" />
            <div className={styles.denbl}>лучший день</div>
            <div className={styles.money}>167.00 ₽</div>
            <button className={styles.but2}>в корзину</button>
          </div>
        </div>

        <div className={styles.kak}>
          Как сделать <br />
          заказ
        </div>
        {/* <div className={styles.rectangle1}></div> */}
        <div className={styles.shagiBig}>
          <div className={styles.shagi}>
            <div className={styles.shag11}>
              <div className={styles.shag1}>1 шаг</div>
              <div className={styles.text22}>
                Выберите какие цветы или подарки <br /> вы хотите купить
              </div>
            </div>
            <div className={styles.shag21}>
              <div className={styles.shag1}>2 шаг</div>
              <div className={styles.text22}>
                Оформите заказ, и мы отправим вам <br />
                подтверждение на электронную почту, <br />
                а так же менеджер свяжется с вами по
                <br />
                телефону или в WhatsApp
              </div>
            </div>
            <div className={styles.shag21}>
              <div className={styles.shag1}>3 шаг</div>
              <div className={styles.text22}>
                Наши флористы бережно подойдут к <br />
                созданию букета цветов в самом начале <br />
                дня или накануне телефону или в WhatsApp
              </div>
            </div>
          </div>
          <div className={styles.shagi2222}>
            <div className={styles.shag21}>
              <div className={styles.shag1}>4 шаг</div>
              <div className={styles.text22}>
                Один из наших курьеров или <br />
                партнёров доставит ваш заказ по <br /> указанному адресу. Мы
                отправим <br />
                вам сообщение в Whats App как <br />
                только заказ будет доставлен
              </div>
            </div>
            <div className={styles.shag21}>
              <div className={styles.shag1}>5 шаг</div>
              <div className={styles.text22}>
                Наслаждайтесь цветами , если <br />
                вы заказали их для дома или <br />
                любовью, которой поделились, <br /> если вы заказали для друга
              </div>
            </div>
          </div>
          {/* <div className={styles.rectangle2}></div> */}
        </div>
      </div>

      <div className={styles.container2}>
        <div className={styles.row}>
          <div className={styles.footercolumn}>
            <ul>
              <img src={logo} alt="32" className={styles.logo2} />
              <h4 className={styles.zagolovok}>реквизиты</h4>
              <div className={styles.text1223}>
                ООО «Ловефлове» 220035, Республика <br />
                Беларусь, г. Минск, ул. Тимирязева д. 67, <br /> комн. 112
                (пом.11) УНП 193263781, р/с <br />
                BY55MTBK30120001093300096372 ЗАО <br /> «МТБанк», БИК MTBKBY22
                220007, г. Минск, <br /> улица Толстого
              </div>
            </ul>
          </div>
          <div className={styles.footercolumn}>
            <h4 className={styles.zagolovok5}> каталог</h4>
            <ul>
              <li>
                <a className={styles.ss} href="#">
                  популярное
                </a>
              </li>
              <li>
                <a className={styles.ss} href="#">
                  сухоцветы
                </a>
              </li>
              <li>
                <a className={styles.ss} href="#">
                  букеты роз
                </a>
              </li>
              <li>
                <a className={styles.ss} href="#">
                  композиции из цветов
                </a>
              </li>
              <li>
                <a className={styles.ss} href="#">
                  индивидуальный букет
                </a>
              </li>
              <li>
                <a className={styles.ss} href="#">
                  букет на праздник
                </a>
              </li>
              <li>
                <a className={styles.ss} href="#">
                  упаковка подарков
                </a>
              </li>
              <li>
                <a className={styles.ss} href="#">
                  шары
                </a>
              </li>
              <li>
                <a className={styles.ss} href="#">
                  открытки
                </a>
              </li>
              <li>
                <a className={styles.ss} href="#">
                  конверты
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footercolumn}>
            <h4 className={styles.zagolovok5}>букет</h4>
            <ul>
              <li>
                <a className={styles.ss} href="#">
                  для деувшки
                </a>
              </li>
              <li>
                <a className={styles.ss} href="#">
                  для мужчины
                </a>
              </li>
              <li>
                <a className={styles.ss} href="#">
                  для жены
                </a>
              </li>
              <li>
                <a className={styles.ss} href="#">
                  для мамы
                </a>
              </li>
              <li>
                <a className={styles.ss} href="#">
                  для коллеги
                </a>
              </li>
              <li>
                <a className={styles.ss} href="#">
                  для начальника
                </a>
              </li>
              <li>
                <a className={styles.ss} href="#">
                  для дочки
                </a>
              </li>
              <li>
                <a className={styles.ss} href="#">
                  для детей
                </a>
              </li>
              <li>
                <a className={styles.ss} href="#">
                  для женщины
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footercolumn3}>
            <ul className={styles.blin}>
             
                <a href="#" className={styles.zagolovok}>
                  Доставка и оплата
                </a>
              
              <h4>
                <a href="#" className={styles.zagolovok}>
                  О нас
                </a>
              </h4>
              <h4>
                <a href="#" className={styles.zagolovok}>
                  FAQ
                </a>
              </h4>
              <h4>
                <a href="#" className={styles.zagolovok}>
                  Контакты
                </a>
              </h4>
              <h4>
                <a href="#" className={styles.zagolovok}>
                  для корпоративных клиентов
                </a>
              </h4>
            </ul>
          </div>
          <div className={styles.footercolumn1}>
            <div className={styles.da}>
              <div className={styles.zagolovok}>zakaz@loverflower.by</div>
              <div className={styles.text2}>
                Доставка 24/7 по договоренности с оператором
              </div>
            </div>
            <div className={styles.da}>
              <h4 className={styles.zagolovok}>ул. Тимирязева 67</h4>
              <div className={styles.text2}>
                10:00 до 21:00 <br />
                без выходных
              </div>
            </div>
            <div className={styles.da}>
              <h4 className={styles.zagolovok}>+375 (29) 113-69-69</h4>
              <div className={styles.text2}>
                прием звонков круглосуточно
                <br />
                без выходных
              </div>
            </div>
            <div className={styles.da23}>
              <a href="#">
                <img src={myImage3} alt="21" className={styles.ic3} />
              </a>
              <a href="#">
                <img src={myImage} alt="12" className={styles.ic3} />
              </a>
              <a href="#">
                <img src={myImage2} alt="231" className={styles.ic3} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
