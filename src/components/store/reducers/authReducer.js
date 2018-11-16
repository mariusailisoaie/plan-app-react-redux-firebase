const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
    console.log('login failed');
      return {
        ...state,
        authError: 'LogIn Failed'
      }      
    case "LOGIN_SUCCESS":
    console.log('login succeeded');
      return {
        ...state,
        authError: 'LogIn Success'
      }
    case "SIGNOUT_SUCCESS":
    console.log('signout success');
      return state;
    default:
      return state;
  }
}

export default authReducer;