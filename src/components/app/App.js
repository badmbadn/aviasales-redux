import React from 'react';

import Logo from '../../images/Logo.svg';
import CardList from '../card-list/card-list';
import Filter from '../filter/filter';

import classes from './App.module.scss';

function App() {
  const arr = [
    {
      price: 69910,
      carrier: 'BT',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2023-03-31T04:38:44.435Z',
          duration: 1033,
          stops: ['JNB'],
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2023-05-20T15:27:21.614Z',
          duration: 1426,
          stops: ['IST', 'JNB', 'HKG'],
        },
      ],
    },
    {
      price: 6910,
      carrier: 'BT',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2023-03-31T04:38:44.435Z',
          duration: 1033,
          stops: ['JNB'],
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2023-05-20T15:27:21.614Z',
          duration: 1426,
          stops: ['IST', 'JNB', 'HKG'],
        },
      ],
    },
    {
      price: 9910,
      carrier: 'BT',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2023-03-31T04:38:44.435Z',
          duration: 1033,
          stops: ['JNB'],
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2023-05-20T15:27:21.614Z',
          duration: 1426,
          stops: ['IST', 'JNB', 'HKG'],
        },
      ],
    },
    {
      price: 6991,
      carrier: 'BT',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2023-03-31T04:38:44.435Z',
          duration: 1033,
          stops: ['JNB'],
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2023-05-20T15:27:21.614Z',
          duration: 1426,
          stops: ['IST', 'JNB', 'HKG'],
        },
      ],
    },
    {
      price: 6939,
      carrier: 'BT',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2023-03-31T04:38:44.435Z',
          duration: 1033,
          stops: ['JNB'],
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2023-05-20T15:27:21.614Z',
          duration: 1426,
          stops: ['IST', 'JNB', 'HKG'],
        },
      ],
    },
    {
      price: 10,
      carrier: 'BT',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2023-03-31T04:38:44.435Z',
          duration: 1033,
          stops: ['JNB'],
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2023-05-20T15:27:21.614Z',
          duration: 1426,
          stops: ['IST', 'JNB', 'HKG'],
        },
      ],
    },
  ];

  return (
    <section className={classes.wrapper}>
      <div className={classes['inner-logo']}>
        <img src={Logo} className="logo" />
      </div>
      <div className={classes['main']}>
        <Filter />
        <CardList data={arr} />
      </div>
    </section>
  );
}
export default App;
