  import{
    LOAD_DATA, 
    GOT_DATA,
    ERROR
  } from '../actions';

  let initialState =
{
    fetchingData: false,
   users: [],
    error: null
  }


  export const userReducer=(state=initialState, action) =>{
   switch(action.type){
    case LOAD_DATA:
      return{...state, fetchingData:true}
    case GOT_DATA:
    return{...state, users:action.payload, fetchingData:false}
    case ERROR:
    return{...state, error:action.payload, fetchingData:false}
    default:
          return state;
      
   } 
  }

  
  
