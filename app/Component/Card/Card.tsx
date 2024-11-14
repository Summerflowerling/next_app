import React from 'react';
import AddBtn from './AddBtn';
import styles from './Card.module.css';

const Card = () => {
  return (
    <div className='card bg-base-100 w-96 shadow-xl'>
      <div className={styles.cardBackground}>Card</div>
      <figure>
        <img
          src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
          alt='Shoes'
        />
      </figure>
      <AddBtn />
    </div>
  );
};

export default Card;
