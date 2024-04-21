type TProps = {
	image: string;
	alt: string;
};

const CardImage = ({ image, alt }: TProps) => {
	return (
		<div>
			<img src={image} alt={alt} width="100%" height="100%" />
		</div>
	);
};

export default CardImage;
