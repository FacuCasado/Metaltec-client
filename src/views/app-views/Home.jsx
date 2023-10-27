import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRaw } from '../../Redux/stockAction';
import StockForm from '../../components/StockForm';

function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRaw());
	}, [dispatch]);

	return (
		<div className="w-screen h-screen flex flex-col justify-center items-center bg-secondary">
			<StockForm />
		</div>
	);
}

export default Home;
