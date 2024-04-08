import React, { ReactNode } from 'react';

export const Content: React.FC<{ children: ReactNode }> = ({ children, ...props }) => {
	return <div {...props}>{children}</div>;
};
