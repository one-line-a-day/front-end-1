import axios from 'axios';

export const LOAD_DATA = "LOAD_DATA";
export const GOT_DATA = "GOT_DATA";
export const ERROR = "ERROR";

export const getData =()=>dispatch=>{
    dispatch({type:LOAD_DATA})
    return axios
    .get('https://one-line-a-day-backend.herokuapp.com')
    .then(res=> {
      console.log(`response: ${res}`)
      return dispatch({type:GOT_DATA, payload: res.data})
    })
    .catch(err=>{
      return dispatch({type:ERROR, payload:err})
    });
  };
