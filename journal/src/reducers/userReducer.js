  import{
    LOAD_USERS, 
    GOT_USERS,
    LOAD_LINES, 
    GOT_LINES,
    ERROR,
    ADD_USER,
    ADDED_USER
  } from '../actions';

  let initialState =
{
    fetchingData: false,
   users: [],
   lines:[],
    error: null,
    addingFriend: false
  }
  


  export const userReducer=(state=initialState, action) =>{
   switch(action.type){
    case LOAD_USERS:
      return{...state, fetchingData:true}
    case GOT_USERS:
    return{...state, users:action.payload, fetchingData:false}
    case LOAD_LINES:
    return{...state, fetchingData:true}
  case GOT_LINES:
  return{...state, lines:action.payload, fetchingData:false}
    case ADD_USER:
      return { ...state, addingFriend: true };
    case ADDED_USER:
      return { ...state, users: action.payload, addingFriend: false };
    
    case ERROR:
    return{...state, error:action.payload, fetchingData:false,addingFriend:false}
    default:
          return state;
      
   } 
  }
  
  
