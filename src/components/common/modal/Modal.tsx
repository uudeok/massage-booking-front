import React, { ReactNode, createContext, useContext, useEffect } from 'react';
import { Header } from './Modal.Header';
import { Button } from './Modal.Button';
import { Content } from './Modal.Content';

// 재사용 가능한 Modal 구현을 위해 기능별로 컴포넌트를 나누고
// 조합해서 사용하도록 구현
// Context API 를 이용해 데이터를 공유
type ModalContextProps = {
	closeModal: () => void;
};

const ModalContext = createContext<ModalContextProps | null>(null);

type ModalWrapperProps = {
	closeModal: () => void;
	children: ReactNode;
};

const ModalWrapper: React.FC<ModalWrapperProps> = ({ closeModal, children }) => {
	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []);

	return <ModalContext.Provider value={{ closeModal }}>{children}</ModalContext.Provider>;
};

const useModalContext = () => {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error('useModalContext must be used within a ModalWrapper');
	}
	return context;
};

export { ModalWrapper, useModalContext, Header, Content, Button };
