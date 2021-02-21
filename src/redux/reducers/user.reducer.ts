import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction } from 'redux';

import { UserState } from '../_types/States';
import { ActionTypes } from '../actions/user.action';

const INITIAL_STATE = {
  currentUser: 'hello',
};
const userReducer = (state: UserState = INITIAL_STATE, action: AnyAction): UserState => {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return { ...state, ...action.payload };
    case ActionTypes.SetCurrentUser:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};

export default userReducer;
