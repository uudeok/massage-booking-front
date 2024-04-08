import React, { ReactNode } from 'react';

type ButtonProps = {
	onClick: () => void;
	children: ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ onClick, children, ...props }) => {
	return (
		<button onClick={onClick} {...props}>
			{children}
		</button>
	);
};
