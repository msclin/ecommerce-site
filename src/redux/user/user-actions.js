import { SET_CURRENT_USER } from './user-action-types';

export const setCurrentUser = user => ({
  payload: user,
  type: SET_CURRENT_USER
});