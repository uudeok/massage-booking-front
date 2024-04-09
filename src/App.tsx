import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { errorStatus, clearError } from './stores/errorSlice';
import { useEffect, useState } from 'react';

import ErrorModal from './components/modal/ErrorModal';
import styled from 'styled-components';
import useApiError from './hooks/useApiError';

function App() {
	const error = useSelector(errorStatus);
	const dispatch = useDispatch();

	const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const { errorHandler } = useApiError();

	useEffect(() => {
		if (error.status !== null && !isErrorModalOpen) {
			setIsErrorModalOpen(true);
			const message = errorHandler(error.status);
			setErrorMessage(message);
		}
	}, [error]);

	const handleCloseModal = () => {
		setIsErrorModalOpen(false);
		dispatch(clearError());
	};

	return (
		<Container>
			{isErrorModalOpen && <ErrorModal closeModal={handleCloseModal} message={errorMessage} />}
			<Outlet />
		</Container>
	);
}

export default App;

const Container = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
`;
