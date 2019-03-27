import LOGIN_USER from '../../constants/actionTypes';

const initialState = {
  token: '',
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};

export default authReducer;
