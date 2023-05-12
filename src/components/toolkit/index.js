import { combineReducers, configureStore } from '@reduxjs/toolkit';

import toolkitSlice from './reduser';

const rootReduser = combineReducers({
  toolkit: toolkitSlice,
});

const store = configureStore({
  reducer: rootReduser,
});
export default store;
