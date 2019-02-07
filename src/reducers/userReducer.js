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
    ADDED_LINE,
    LOGIN_ERROR
  } from '../actions';

  let initialState =
{
    fetchingData: false,
   users: [],
   lines:[],
    error: null,
    addingFriend: false,
    loggedIn:false,
    addingLine:false,
    username:''
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
      return { ...state, addingFriend: false };
      case ADD_LINE:
      return { ...state, addingLine: true };
    case ADDED_LINE:
      return { ...state,  addingLine: false };
      case LOGIN_ATTEMPT:
      return { ...state, loggedIn: false };
    case LOGIN_SUCCESS:
      return { ...state, username:action.payload, loggedIn: true, error:'' };
      case LOGIN_ERROR:
    return{...state, error:action.payload, fetchingData:false,addingFriend:false};
    case ERROR:
    return{...state,  fetchingData:false,addingFriend:false}
    default:
          return state;
      
   } 
  }
  
  
