import ContactUsForm from "../../../FAQ/ContactUsForm";
import Modal from "./Modal";

type EmailModalType = {
  closeModal: () => void;
};

const EmailModal = ({ closeModal }: EmailModalType) => {
  return (
    <Modal closeModal={closeModal}>
      <ContactUsForm />
    </Modal>
  );
};

export default EmailModal;
