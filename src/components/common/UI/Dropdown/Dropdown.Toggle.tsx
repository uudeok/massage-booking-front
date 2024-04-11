import React, { useContext, ReactNode } from 'react';
import { DropdownContext } from './Dropdown';

// DropdownToggle 컴포넌트 정의
export const DropdownToggle: React.FC<{ children: ReactNode }> = ({ children, ...props }) => {
	const { toggleDropdown, selectedOption } = useContext(DropdownContext);
	return (
		<button onClick={toggleDropdown} {...props}>
			{selectedOption || children}
		</button>
	);
};
