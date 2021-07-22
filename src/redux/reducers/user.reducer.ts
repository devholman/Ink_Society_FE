import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction } from 'redux';
import { UserState } from 'redux/_types/States';
import { ActionTypes } from 'redux/actions/user.action';

const INITIAL_STATE = {
  currentUser: '',
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
