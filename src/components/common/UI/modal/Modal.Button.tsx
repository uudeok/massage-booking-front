import React, { ReactNode } from 'react';

type ButtonProps = {
	onClick: () => void;
	children: ReactNode;
};

export const ModalButton: React.FC<ButtonProps> = ({ onClick, children, ...props }) => {
	return (
		<button onClick={onClick} {...props}>
			{children}
		</button>
	);
};
