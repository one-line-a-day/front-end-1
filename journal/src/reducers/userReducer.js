  import{
    LOAD_USERS, 
    GOT_USERS,
    LOAD_LINES, 
    GOT_LINES,
    ERROR,
    ADD_USER,
    ADDED_USER,
    LOGIN_ATTEMPT,
    LOGIN_SUCCESS,
    ADD_LINE,
    ADDED_LINE
  } from '../actions';

  let initialState =
{
    fetchingData: false,
   users: [],
   lines:[],
    error: null,
    addingFriend: false,
    loggedIn:false,
    addingLine:false
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
      case ADD_LINE:
      return { ...state, addingLine: true };
    case ADDED_LINE:
      return { ...state, lines: action.payload, addingLine: false };
      case LOGIN_ATTEMPT:
      return { ...state, loggedIN: false };
    case LOGIN_SUCCESS:
      return { ...state, users: action.payload, loggedIn: true };
    case ERROR:
    return{...state, error:action.payload, fetchingData:false,addingFriend:false}
    default:
          return state;
      
   } 
  }
  
  
