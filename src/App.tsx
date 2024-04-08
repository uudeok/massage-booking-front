import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { errorStatus, clearError } from './stores/errorSlice';
import { useEffect, useState } from 'react';

import ErrorModal from './components/common/UI/modal/ErrorModal';
import styled from 'styled-components';

function App() {
	const error = useSelector(errorStatus);
	const dispatch = useDispatch();
	const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		if (error.status !== null && !isErrorModalOpen) {
			setIsErrorModalOpen(true);
			const message = errorHandler(error.status);
			setErrorMessage(message);
		}
	}, [error]);

	const errorHandler = (status: number) => {
		switch (status) {
			case 404:
				return '페이지를 찾을 수 없습니다';
				break;

			case 500:
				return '서버에 접속할 수 없습니다';
				break;

			case 401:
				return '인증되지 않은 유저입니다';
				break;

			default:
				return '오류가 발생했습니다';
				break;
		}
	};

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
