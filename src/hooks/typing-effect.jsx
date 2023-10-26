import { useEffect, useRef, useState } from 'react';

function useTypingEffect(text, strokeDuration) {
	const [currentPosition, setCurrentPosition] = useState(0);
	const currentPositionRef = useRef(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentPosition((value) => value + 1);
			currentPositionRef.current++;
			if (currentPositionRef.current > text.length) {
				clearInterval(interval);
			}
		}, strokeDuration);
		return () => {
			clearInterval(interval);
		};
	}, [strokeDuration, text]);

	return text.substring(0, currentPosition);
}

export default useTypingEffect;
