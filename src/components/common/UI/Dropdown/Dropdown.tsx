import React, { useContext, createContext, useState, ReactNode } from 'react';

// Dropdown 컴포넌트에서 사용할 Context 타입 정의
type DropdownContextType = {
	isOpen: boolean;
	toggleDropdown: () => void;
	selectedOption: string | null;
	selectOption: (value: string) => void;
};

// Dropdown 컴포넌트에서 사용할 Context 생성
export const DropdownContext = createContext<DropdownContextType>({
	isOpen: false,
	toggleDropdown: () => {},
	selectedOption: null,
	selectOption: () => {},
});

// DropdownToggle 컴포넌트 정의
const DropdownToggle: React.FC<{ children: ReactNode }> = ({ children, ...props }) => {
	const { toggleDropdown, selectedOption } = useContext(DropdownContext);
	return (
		<button onClick={toggleDropdown} {...props}>
			{selectedOption || children}
		</button>
	);
};

// DropdownMenu 컴포넌트 정의
const DropdownMenu: React.FC<{ children: ReactNode }> = ({ children, ...props }) => {
	const { isOpen } = useContext(DropdownContext);
	return isOpen ? <div {...props}>{children}</div> : null;
};

// Option 컴포넌트 정의
const Option: React.FC<{ value: string }> = ({ value, ...props }) => {
	const { selectOption } = useContext(DropdownContext);
	return (
		<div onClick={() => selectOption(value)} {...props}>
			{value}
		</div>
	);
};

// Dropdown 컴포넌트 정의
const Dropdown: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState<string | null>(null); // 선택된 옵션 상태

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const selectOption = (value: string) => {
		setSelectedOption(value);
		setIsOpen(false);
	};

	return (
		<DropdownContext.Provider value={{ isOpen, toggleDropdown, selectedOption, selectOption }}>
			{children}
		</DropdownContext.Provider>
	);
};

export { Dropdown, DropdownToggle, DropdownMenu, Option };
