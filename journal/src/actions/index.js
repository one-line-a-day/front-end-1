import axios from 'axios';

export const LOAD_USERS = "LOAD_USERS";
export const GOT_USERS = "GOT_USERS";
export const LOAD_LINES = "LOAD_LINES";
export const GOT_LINES = "GOT_LINES";
export const ADD_USER ="ADD_USER";
export const ADDED_USER="ADD_USER";
export const ERROR = "ERROR";

export const getUsers =()=>dispatch=>{
    dispatch({type:LOAD_USERS})
     axios
    .get('https://one-line-a-day-backend.herokuapp.com/api/users/testcall')
    .then(res=> {
      console.log(`response: ${res.data}`)
       dispatch({type:GOT_USERS, payload: res.data})
    })
    .catch(err=>{
       dispatch({type:ERROR, payload:err})
    });
  };

  export const getLines =()=>dispatch=>{
    dispatch({type:LOAD_LINES})
     axios
    .get('https://one-line-a-day-backend.herokuapp.com/api/lines/testcall')
    .then(res=> {
      console.log(`response: ${res}`)
       dispatch({type:GOT_LINES, payload: res.data})
    })
    .catch(err=>{
       dispatch({type:ERROR, payload:err})
    });
  };

  export const addUser =(newUser)=>dispatch=>{
    dispatch({type:ADD_USER})
     axios
    .post('https://one-line-a-day-backend.herokuapp.com/api/users/testcall',newUser)
    .then(res=> {
      console.log(`response: ${res.data}`)
       dispatch({type:ADDED_USER, payload: res.data})
    })
    .catch(err=>{
       dispatch({type:ERROR, payload:err})
    });
  };
