export enum ActionTypes {
  SetCurrentUser = 'SET_CURRENT_USER',
}
export const setCurrentUser: (user: string) => {} = (user: string): {} => ({
  type: ActionTypes.SetCurrentUser,
  payload: user,
});
