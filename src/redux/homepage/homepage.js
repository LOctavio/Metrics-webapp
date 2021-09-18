const GET_LIST = 'metrics-webapp/homepage/GET_LIST';
const FILTER_LIST = 'metrics-webapp/homepage/FILTER_LIST';

const initialState = [];

export const getList = (list) => ({
  type: GET_LIST,
  payload: list,
});

export const filterList = (name) => ({
  type: FILTER_LIST,
  payload: name,
});

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST:
      return action.payload;
    case FILTER_LIST:
      return state.map((element) => (element.country.toLowerCase().startsWith(action.payload)
        ? { ...element, visibility: true }
        : { ...element, visibility: false }
      ));
    default:
      return state;
  }
};

export default homeReducer;
