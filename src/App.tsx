import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { errorStatus, clearError } from './stores/errorSlice';
import ErrorModal from './components/common/UI/modal/ErrorModal';
import { useEffect, useState } from 'react';

function App() {
	const error = useSelector(errorStatus);
	const dispatch = useDispatch();
	const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

	useEffect(() => {
		if (error.status !== null && !isErrorModalOpen) {
			setIsErrorModalOpen(true);
		}
	}, [error]);

	const handleCloseModal = () => {
		setIsErrorModalOpen(false);
		dispatch(clearError());
	};

	return (
		<div style={{ height: '100vh' }}>
			<Outlet />
			{isErrorModalOpen && <ErrorModal closeModal={handleCloseModal} />}
		</div>
	);
}

export default App;
