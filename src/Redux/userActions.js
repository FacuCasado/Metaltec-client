import axios from 'axios';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// ============= Users Actions Types
export const USER_SIGN_IN = 'USER_SIGN_IN';
export const USER_SIGN_OUT = 'USER_SIGN_OUT';

export const singIn = (payload) => {
	return async (dispatch) => {
		try {
			const response = await axios.post(`${BACKEND_URL}/user/login`, payload);
			const user = await response.data.data;
			dispatch({
				type: USER_SIGN_IN,
				payload: user,
			});
		} catch (error) {
			console.log(error);
		}
	};
};
