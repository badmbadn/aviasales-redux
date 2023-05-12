/* eslint-disable react/jsx-key */
import React from 'react';

import Tabs from '../tabs/tabs';

import classes from './card-list.module.scss';

export default function CardList({ data }) {
  const tickets = data.map(({ price, carrier }) => {
    return (
      <li className={classes['card-list__item']} key={price}>
        <div className={classes['card-list__item-price']}>
          <p>{`${price} P`}</p>
          <img className="card-list__item-img" src={`https://pics.avs.io/99/36/${carrier}.png`} alt="logo-company" />
        </div>
        <div className={`${classes['card-list__item-info']} ${classes['avia-info']}`}>
          <div className={classes['avia-info__segment']}>
            <div>
              <span className={classes['avia-info__title-descr']}>MOY-HKT</span>
              <span className={classes['avia-info__descr-info']}>10:00 - 08:00</span>
            </div>
            <div>
              <span className={classes['avia-info__title-descr']}>В ПУТИ</span>
              <span className={classes['avia-info__descr-info']}>21ч 2м</span>
            </div>
            <div>
              <span className={classes['avia-info__title-descr']}>2 пересадки</span>
              <span className={classes['avia-info__descr-info']}>HKG</span>
            </div>
          </div>
          <div className={classes['avia-info__segment']}>
            <div>
              <span className={classes['avia-info__title-descr']}>MOY-HKT</span>
              <span className={classes['avia-info__descr-info']}>10:00 - 08:00</span>
            </div>
            <div>
              <span className={classes['avia-info__title-descr']}>В ПУТИ</span>
              <span className={classes['avia-info__descr-info']}>21ч 2м</span>
            </div>
            <div>
              <span className={classes['avia-info__title-descr']}>2 пересадки</span>
              <span className={classes['avia-info__descr-info']}>HKG</span>
            </div>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div className={classes['cards']}>
      <Tabs />
      <ul className={classes['card-list']}>{tickets}</ul>
      <button className={classes['more-btn']}> Показать еще 5 билетов</button>
    </div>
  );
}
