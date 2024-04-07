import Modal from './Modal';

type ErrorModalProps = {
	closeModal: () => void;
};

const ErrorModal = ({ closeModal }: ErrorModalProps) => {
	return (
		<Modal closeModal={closeModal}>
			<div>error</div>
			<button onClick={() => closeModal()}>click</button>
		</Modal>
	);
};

export default ErrorModal;
