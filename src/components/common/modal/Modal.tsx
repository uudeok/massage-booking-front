import styled from "styled-components";

interface IModalProps {
  children: React.ReactNode;
  width: string;
}

const Modal = ({ children, width }: IModalProps) => {
  return <ModalContainerStyle width={width}>{children}</ModalContainerStyle>;
};

export default Modal;

const ModalContainerStyle = styled.div<{ width: string }>`
  border-radius: 1rem;
  background-color: whitesmoke;
  box-shadow: 0 0 1rem 0 grey;
  /* display: flex; */
  overflow-x: scroll;
  min-height: 20rem;
  z-index: 10;
  position: absolute;
  transform: translate(0%, 110%);

  width: ${({ width }) => width};
`;
