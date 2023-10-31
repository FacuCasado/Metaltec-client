import { USER_SIGN_IN, USER_SIGN_OUT } from './userActions';
import { GET_RAW, POST_NEWENTRY } from './stockAction';

const initialState = {
	//user state
	isLogin: false,
	userData: {},

	//stock state
	rawStock: {},
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case USER_SIGN_IN:
			return { ...state, isLogin: true, userData: action.payload };
		case USER_SIGN_OUT:
			return { ...state, isLogin: false, userData: {}, rawStock: {} };
		case GET_RAW:
			return { ...state, rawStock: action.payload };
		case POST_NEWENTRY:
			return {
				...state,
			};
		default:
			return state;
	}
}

export default rootReducer;
