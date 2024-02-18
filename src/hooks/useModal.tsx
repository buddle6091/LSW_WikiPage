import React, { useCallback, useState } from "react";
import ModalComponent from "../components/common/Modal";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const closeModalHandler = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const Modal = ({ children }: { children: React.ReactNode }) => (
    <ModalComponent open={isOpen} onClose={closeModalHandler}>
      {children}
    </ModalComponent>
  );

  return { Modal, openModalHandler, closeModalHandler };
};

export default useModal;
