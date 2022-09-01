const ADD_USER_DATA = 'ADD_USER_DATA';
const ADD_DATA_HISTORY = 'ADD_DATA_HISTORY';

export const addUserDataAction = (userData) => (
  {
    type: ADD_USER_DATA,
    payload: {
      ...userData,
    },
  }
);

export const addDataHistoryAction = (data) => ({ type: ADD_DATA_HISTORY, payload: data });
