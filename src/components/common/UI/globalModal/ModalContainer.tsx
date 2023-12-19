import { useSelector, useDispatch } from "react-redux";
// import { modalSelector, closeModal } from "../../../../stores/modalSlice";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { MODAL_COMPONENTS } from "./ModalStore";

// const BackDrop = () => {
//   const dispatch = useDispatch();
//   return <BackDropStyle onClick={() => dispatch(closeModal())}></BackDropStyle>;
// };

const ModalContainer = () => {
  // const modalList = useSelector(modalSelector);
  // const portalElement = document.getElementById("overlays") as HTMLElement;

  // if (modalList.length === 0) {
  //   return null;
  // }

  // const renderModal = modalList.map(({ type, props }) => {
  //   const ModalComponent = MODAL_COMPONENTS[type];
  //   return <ModalComponent key={type} {...props} />;
  // });

  return (
    <>
      {/* {createPortal(<BackDrop />, portalElement)}
      {createPortal(<>{renderModal}</>, portalElement)}; */}
    </>
  );
};

export default ModalContainer;

const BackDropStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;
