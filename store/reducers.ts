import { combineReducers } from '@reduxjs/toolkit';

interface Action {
  type: string;
  payload?: any;
}

const userReducer = (state: any = null, action: Action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    case 'CLEAR_USER':
      return null;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
