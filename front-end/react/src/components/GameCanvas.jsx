import { useRef, useEffect, useState } from 'react';

const GameCanvas = () => {
	const canvasRef = useRef(null);
	const [playerPos, setPlayerPos] = useState({ x: 375, y: 275 });


	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');

		canvas.width = 800;
		canvas.height = 600;

		
		const drawPlayer = (x, y) => {
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.fillStyle = 'blue';
			context.fillRect(x, y, 15, 15)
		};
		
		const drawEnvironment = (context) => {
			context.fillStyle = 'green';
			context.fillRect(100, 100, 200, 200)
		}
		
		drawEnvironment(context);
		drawPlayer(playerPos.x, playerPos.y);

		const handleKeyPress = (e) => {
			const { x, y } = playerPos;
			switch (e.key) {
				case 'ArrowUp':
					setPlayerPos({x, y: y - 10});
					break;
				case 'ArrowDown':
					setPlayerPos({x,y: y + 10});
					break;
				case 'ArrowLeft':
					setPlayerPos({ x: x - 10, y });
					break;
				case 'ArrowRight':
					setPlayerPos({ x: x + 10, y });
					break;
				default:
					break;
			}
		};

		window.addEventListener('keydown', handleKeyPress);

		return () => {
			window.removeEventListener('keydown', handleKeyPress);
		};

	}, [playerPos]);

	return (
		<div className='canvas'>

			<canvas ref={canvasRef} style={{border: '1px solid black'}}/>

		</div>
	);
};

export default GameCanvas;