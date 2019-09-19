import axios from "axios";

export const FETCH_JOKE_START = "FETCH_JOKE_START";
export const FETCH_JOKE_SUCCESS = "FETCH_JOKE_SUCCESS";
export const FETCH_JOKE_FAIL = "FETCH_JOKE_FAIL";

export const getJoke = () => dispatch => {
  dispatch({ type: FETCH_JOKE_START });
  axios
    // .get("https://www.metaweather.com/api/location/2487956/")
    .get("https://icanhazdadjoke.com/slack")
    .then(res => {
      // console.log(res.data.attachments[0].text);
      dispatch({
        type: FETCH_JOKE_SUCCESS,
        payload: res.data.attachments[0].text
      });
    })
    .catch(err => {
      console.error(err);
      dispatch({ type: FETCH_JOKE_FAIL, payload: err });
    });
};
