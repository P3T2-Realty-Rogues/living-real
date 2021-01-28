import React, { useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import Jumbotron from '../components/Jumbotron';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';

function Success() {
	return (
		<div>
			<Jumbotron>
				<h1>Success!</h1>
				<h2>Thank you for your payment!</h2>
				<h2>You will now be redirected to the home page in a moment.</h2>
			</Jumbotron>
		</div>
	);
}

export default Success;