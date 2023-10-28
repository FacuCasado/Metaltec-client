import axios from 'axios';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

//============= Stock Actions Types
export const GET_RAW = 'GET_RAW';
export const POST_NEWENTRY = 'POST_NEWENTRY';

export const getRaw = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get(`${BACKEND_URL}/stock/raw`);
			const available = response.data.data[0].available;
			const name = response.data.data[0].name;
			dispatch({
				type: GET_RAW,
				payload: { available, name },
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const postNewStock = (body) => {
	return async (dispatch) => {
		try {
			const response = await axios.post(`${BACKEND_URL}/bullet/newentry`, body);
			const available = response.data.data.available;
			dispatch(getRaw());
			dispatch({
				type: POST_NEWENTRY,
				payload: available,
			});
		} catch (error) {
			console.log(error);
		}
	};
};
