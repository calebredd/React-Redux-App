import {
  FETCH_JOKE_START,
  FETCH_JOKE_FAIL,
  FETCH_JOKE_SUCCESS
} from "../action/";
const initialState = {
  jokes: [],
  error: "",
  isFetching: false
};
function reducer(state = initialState, action) {
  // console.log("reducer", action);
  switch (action.type) {
    case FETCH_JOKE_START:
      return { ...state, isFetching: true, error: "" };
    case FETCH_JOKE_SUCCESS:
      return {
        ...state,
        jokes: [action.payload, ...state.jokes],
        isFetching: false,
        error: ""
      };
    case FETCH_JOKE_FAIL:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
}
export default reducer;
