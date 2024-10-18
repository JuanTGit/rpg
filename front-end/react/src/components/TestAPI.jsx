import { useEffect, useState } from "react";
import axios from 'axios';

function TestAPI() {
	const [message, setMessage] = useState('')

	useEffect(() => {
		const port = 3000

		axios.get(`http://localhost:${port}/`)
			.then((response) => {
				setMessage(response.data.message);
			})

	}, [])

	return (
		<h1>{message}</h1>
	)
}

export default TestAPI