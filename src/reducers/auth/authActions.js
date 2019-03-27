import LOGIN_USER from '../../constants/actionTypes';

export function loginUser(token) {
  return {
    type: LOGIN_USER,
    payload: {
      token,
    },
  };
}

export default loginUser;
