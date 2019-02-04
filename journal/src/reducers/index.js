import{
    LOAD_USERS, 
    GOT_USERS,
    ADDING_POST,
    ADDED_POST,
    ERROR
  } from '../actions';

  let initialState =
{
    fetchingData: false,
  
    exData: [],
    error: null
  }

  export const exReducer
  