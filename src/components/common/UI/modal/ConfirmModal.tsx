import Modal from './Modal';
import styled from 'styled-components';

type ConfirmModalType = {
	closeModal: () => void;
	result: string;
};

const ConfirmModal = ({ closeModal, result }: ConfirmModalType) => {
	console.log('result', result);
	return (
		<Modal closeModal={closeModal} height="15rem" $radius="10px">
			<div>{result}</div>
		</Modal>
	);
};

export default ConfirmModal;
