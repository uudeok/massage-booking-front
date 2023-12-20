import styled from "styled-components";

type TProps = {
  image: string;
  alt: string;
};

const CardImage = ({ image, alt }: TProps) => {
  return (
    <ImgBoxStyle>
      <img src={image} alt={alt} width="100%" height="100%" />
    </ImgBoxStyle>
  );
};

export default CardImage;

const ImgBoxStyle = styled.div`
  height: 70%;

  img {
    border-radius: 10px;
  }
`;
