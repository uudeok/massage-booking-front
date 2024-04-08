import styled from "styled-components";

type TProps = {
  title: string;
  content?: string | number;
  subTitle?: string | number;
  fontSize?: string;
  textAlign?: string;
};

const CardContent = ({
  title,
  content,
  subTitle,
  fontSize,
  textAlign,
}: TProps) => {
  return (
    <ContentBoxStyle $textAlign={textAlign} $fontSize={fontSize}>
      <TitleStyle>
        {title}
        {subTitle}
      </TitleStyle>
      <ContentStyle>{content}</ContentStyle>
    </ContentBoxStyle>
  );
};

export default CardContent;

const ContentBoxStyle = styled.div<{ $textAlign?: string; $fontSize?: string }>`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  text-align: ${({ $textAlign }) => ($textAlign ? $textAlign : "center")};
  font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : "1rem")};
`;

const TitleStyle = styled.h3`
  margin-bottom: 1rem;
  font-weight: bold;
`;

const ContentStyle = styled.span`
  width: 100%;
`;
