const GET_LIST = 'metrics-webapp/details/GET_LIST';

const initialState = [];

export const getList = (list) => ({
  type: GET_LIST,
  payload: list,
});

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default detailsReducer;
