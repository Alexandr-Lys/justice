const ADD_DATA_HISTORY = 'ADD_DATA_HISTORY';

const defaultState = [];

// eslint-disable-next-line default-param-last
export const historyReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_DATA_HISTORY:
      return action.payload;
    default:
      return state;
  }
};
