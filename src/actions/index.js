import axios from 'axios';

export const LOAD_USERS = "LOAD_USERS";
export const GOT_USERS = "GOT_USERS";
export const LOAD_LINES = "LOAD_LINES";
export const GOT_LINES = "GOT_LINES";
export const ADD_USER ="ADD_USER";
export const ADDED_USER="ADDED_USER";
export const ADD_LINE ="ADD_LINE";
export const ADDED_LINE="ADDED_LINE";
export const LOGIN_ATTEMPT ="LOGIN_ATTEMPT";
export const LOGIN_SUCCESS="LOGIN_SUCCESS";
export const LOGIN_ERROR="LOGIN_ERROR";
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
    .get('https://one-line-a-day-backend.herokuapp.com/api/lines',{
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res=> {
      console.log('getLines:', res.data)
       dispatch({type:GOT_LINES, payload: res.data})
    })
    .catch(err=>{
       dispatch({type:ERROR, payload:err})
    });
  };
  
  export const addLine =(newLine)=>dispatch=>{
   dispatch({type:ADD_LINE})
    axios
   .post('https://one-line-a-day-backend.herokuapp.com/api/lines',newLine,{
      headers: { Authorization: localStorage.getItem("token") }
   })
   .then(res=> {
     console.log('lineResponse:',res.data)
      dispatch({type:ADDED_LINE})
   })
   .then(()=>getLines()(dispatch))
   .catch(err=>{
      dispatch({type:ERROR, payload:err})
   });
 };

  

  export const addUser =(newUser)=>dispatch=>{
    dispatch({type:ADD_USER})
    return axios
    .post('https://one-line-a-day-backend.herokuapp.com/api/users/register',newUser)
    .then(res=> {
      console.log('response:' ,res.data)
      localStorage.setItem("token", res.data.token);
       dispatch({type:ADDED_USER})
    })
    .catch(err=>{
       dispatch({type:ERROR, payload:err})
    });
  };

  export const login =(newLogin,push)=>dispatch=>{
   dispatch({type:LOGIN_ATTEMPT})
    return axios
   .post('https://one-line-a-day-backend.herokuapp.com/api/users/login',newLogin,{
      headers: { Authorization: localStorage.getItem("token") }
   })
   .then(res=> {
     console.log('login:',res.data)
      dispatch({type:LOGIN_SUCCESS,payload:res.data.username})
   })
   .then(()=>push('/timeline'))
   .catch(err=>{
      dispatch({type:LOGIN_ERROR, payload:'Error: Invalid Entry'})
   });
 };