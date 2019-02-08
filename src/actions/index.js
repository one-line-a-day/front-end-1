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
export const UPDATE_LINE ="UPDATE_LINE";
export const LINE_UPDATED="LINE_UPDATED";
export const UPDATE_ERROR="UPDATE_ERROR";
export const DELETE_LINE ="DELETE_LINE";
export const LINE_DELETED="LINE_DELETED";
export const DELETE_ERROR="DELETE_ERROR";
export const GET_ONE_LINE ="GET_ONELINE";
export const GOT_ONE_LINE="GOT_ONE_LINE";
export const ONE_LINE_ERROR="ONE_LINE_ERROR";
export const ERROR = "ERROR";

export const getUsers =()=>dispatch=>{
    dispatch({type:LOAD_USERS})
     axios
    .get('https://one-line-a-day-backend.herokuapp.com/api/users/testcall')
    .then(res=> {
      
       dispatch({type:GOT_USERS, payload: res.data})
    })
    .catch(err=>{
       dispatch({type:ERROR, payload:err})
    });
  };

  export const getLines =()=>dispatch=>{
    dispatch({type:LOAD_LINES})
     return axios
    .get('https://one-line-a-day-backend.herokuapp.com/api/lines',{
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res=> {
      
       dispatch({type:GOT_LINES, payload: res.data})
    })
    .catch(err=>{
       dispatch({type:ERROR, payload:err})
    });
  };

  export const getLine =(id)=>dispatch=>{
   dispatch({type:GET_ONE_LINE})
    return axios
   .get(`https://one-line-a-day-backend.herokuapp.com/api/lines/id/${id}`,{
     headers: { Authorization: localStorage.getItem("token") }
   })
   .then(res=> {
     
      dispatch({type:GOT_ONE_LINE, payload: res.data})
   })
   .catch(err=>{
      dispatch({type:ONE_LINE_ERROR, payload:'Error getting one line'})
   });
 };
  
  export const addLine =(newLine)=>dispatch=>{
   dispatch({type:ADD_LINE})
    return axios
   .post('https://one-line-a-day-backend.herokuapp.com/api/lines',newLine,{
      headers: { Authorization: localStorage.getItem("token") }
   })
   .then(res=> {
     
      dispatch({type:ADDED_LINE})
   })
   .then(()=>getLines()(dispatch))
   .catch(err=>{
      dispatch({type:ERROR, payload:err})
   });
 };

 export const deletePost =(id)=>dispatch=>{
   dispatch({type:DELETE_LINE})
    return axios
   .delete(`https://one-line-a-day-backend.herokuapp.com/api/lines/${id}`,{
      headers: { Authorization: localStorage.getItem("token") }
   })
   .then(res=> {
     
      dispatch({type:LINE_DELETED})
   })
   .then(()=>getLines()(dispatch))
   .catch(err=>{
      dispatch({type:DELETE_ERROR, payload:'Delete Error'})
   });
 };

  

  export const addUser =(newUser)=>dispatch=>{
    dispatch({type:ADD_USER})
    return axios
    .post('https://one-line-a-day-backend.herokuapp.com/api/users/register',newUser)
    .then(res=> {
      
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username);
       dispatch({type:ADDED_USER, payload:res.data.username})
    })
    .catch(err=>{
       dispatch({type:ERROR, payload:err})
    });
  };

  export const login =(newLogin,push)=>dispatch=>{
   dispatch({type:LOGIN_ATTEMPT})
    return axios
   .post('https://one-line-a-day-backend.herokuapp.com/api/users/login',newLogin)
   .then(res=> {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username);
     
      dispatch({type:LOGIN_SUCCESS,payload:res.data.username})
   })
   .then(()=>push('/timeline'))
   .catch(err=>{
      dispatch({type:LOGIN_ERROR, payload:'Error: Invalid Entry'})
   });
 };

 export const updateLine =(line,id)=>dispatch=>{
   dispatch({type:UPDATE_LINE})
    return axios
   .patch(`https://one-line-a-day-backend.herokuapp.com/api/lines/${id}`,{line},{
      headers: { Authorization: localStorage.getItem("token") }
   })
   .then(res=> {
    
      dispatch({type:LINE_UPDATED})
   })
   .then(()=>getLines()(dispatch))
   .catch(err=>{
      dispatch({type:UPDATE_ERROR, payload:'Error Updating Line'})
   });
 };
