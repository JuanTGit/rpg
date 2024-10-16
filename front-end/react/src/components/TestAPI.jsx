import { useEffect, useState } from "react";
import axios from 'axios';

const TestAPI = () => {
	const [message, setMessage] = useState("");

	useEffect(() => {
		axios.get('http://localhost:3000/')
			.then((response) => {
				setMessage(response.data.message);
			})
			.catch((error) => {
				console.error(`There was an error fetching data:`, error)
			});
	}, []);

	return <div>{message}</div>;
};

export default TestAPI;