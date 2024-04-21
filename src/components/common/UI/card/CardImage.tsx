type TProps = {
	image: string;
	alt: string;
};

const CardImage = ({ image, alt, ...props }: TProps) => {
	return (
		<div>
			<img src={image} alt={alt} width="100%" height="100%" {...props} />
		</div>
	);
};

export default CardImage;
