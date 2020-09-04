import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
	baseURL: 'https://stark-temple-24797.herokuapp.com',
	headers: {
		'Content-type': 'application/json',
	},
});
