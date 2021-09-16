const GET_LIST = 'metrics-webapp/homepage/GET_LIST';

const initialState = [];

export const getList = (list) => ({
  type: GET_LIST,
  payload: list,
});

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default homeReducer;
