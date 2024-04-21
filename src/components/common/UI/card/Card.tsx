const Card = ({ children, ...props }: { children: React.ReactNode }) => {
	return <div {...props}>{children}</div>;
};

export default Card;
