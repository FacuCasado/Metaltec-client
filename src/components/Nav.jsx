import { useDispatch } from 'react-redux';
import { singOut } from '../Redux/userActions';
import { useNavigate } from 'react-router-dom';

function Nav() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogOut = () => {
		dispatch(singOut());
		navigate('/');
	};

	return (
		<header className="navHeader">
			<span className="display-flex">Metaltec</span>
			<nav>
				<button
					className="bg-secondary"
					onClick={handleLogOut}
				>
					Salir
				</button>
			</nav>
		</header>
	);
}

export default Nav;
