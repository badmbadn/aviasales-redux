/* eslint-disable import/named */
import { configureStore } from '@reduxjs/toolkit';

import { FILTER_TYPE } from '../actions/actionFilter';
const initialState = {
  checked: {
    all: true,
    0: true,
    1: true,
    2: true,
    3: true,
  },
};

const checkedAll = (list) =>
  Object.keys(list).reduce((acc, key) => {
    acc[key] = !list.all;
    return acc;
  }, {});

const checkboxFilters = (filter, filterList) => {
  let newList = {};
  if (filter === 'all') {
    newList = checkedAll(filterList);
  } else {
    newList = { ...filterList, [filter]: !filterList[filter], all: false };
  }
  if (Object.values(newList).filter((value) => value).length === 4) {
    newList = { ...newList, all: true };
  }
  return newList;
};

const filterReducer = (state = initialState, { type, payload } = {}) => {
  const { checked } = state;
  switch (type) {
    case FILTER_TYPE:
      return { checked: checkboxFilters(payload, checked) };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
});

export default store;
