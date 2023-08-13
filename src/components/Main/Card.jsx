import React from 'react'
import styles from './Card.module.css'
import cardimg from './catalogimg/card1.svg'
function Card(props)  {
  return (
    <div className={styles.card} >
    <img src={cardimg} alt="2781" />
    <div className={styles.title1}>
   {props.title}
    </div>
    <div className={styles.cena}>
    {props.price} ₽
    </div>
    <button className={styles.but2}>в корзину</button>
  </div>
  )
}

export default Card;