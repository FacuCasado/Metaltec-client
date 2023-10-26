/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import Login from '../views/app-views/Login';
// Hooks
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Requiere que el componente children este logeado y redirige a SigniIn si no lo esta
const RequireLogin = ({ children }) => {
	const navigate = useNavigate();
	const isLogin = useSelector((state) => state.isLogin);
	useEffect(() => {
		if (!isLogin) {
			navigate('/');
		}
	}, [isLogin, navigate]);
	return isLogin ? children : <Login />;
};

export default RequireLogin;
