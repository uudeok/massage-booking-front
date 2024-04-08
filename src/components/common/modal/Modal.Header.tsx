import React, { ReactNode } from 'react';

export const Header: React.FC<{ children: ReactNode }> = ({ children, ...props }) => {
	return <div {...props}>{children}</div>;
};
