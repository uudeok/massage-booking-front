import { ReactNode, useEffect } from 'react';
import { Header } from './Modal.Header';
import { Content } from './Modal.Content';
import { Button } from './Modal.Button';

const ModalWrapper = ({ children, ...props }: { children: ReactNode }) => {
	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []);

	return (
		<div style={{ height: '100%' }} {...props}>
			{children}
		</div>
	);
};

export { ModalWrapper, Header, Content, Button };
