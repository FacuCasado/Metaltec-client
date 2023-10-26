import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRaw } from '../../Redux/stockAction';

function Home() {
	const dispatch = useDispatch();
	const userData = useSelector((state) => state.userData);
	const rawStock = useSelector((state) => state.rawStock);
	useEffect(() => {
		dispatch(getRaw());
	}, [dispatch]);
	console.log(rawStock);
	return (
		<div className="w-screen h-screen flex flex-col justify-center items-center bg-secondary">
			{rawStock.available}
			{rawStock.name}
		</div>
	);
}

export default Home;
