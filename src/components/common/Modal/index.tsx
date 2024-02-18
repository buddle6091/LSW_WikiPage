import { useEffect } from "react";
import * as S from "./styled";
import ModalPortal from "./Portal";

interface ModalProps {
  isModalOpen?: boolean;
  setIsModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const ModalComponent = ({ open, onClose, children }: ModalProps) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
    if (!open) {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  /* 뒤로가기 이벤트 감지 시, 해당 이벤트 대신 unMount */
  useEffect(() => {
    const preventGoBack = () => {
      history.go(1);
      onClose();
    };

    history.pushState(null, "", location.href);
    window.addEventListener("popstate", preventGoBack);

    return () => window.removeEventListener("popstate", preventGoBack);
  }, [onClose]);

  if (!open) return null;

  return (
    <ModalPortal>
      <S.ModalWrapper>
        <S.ModalOverlay />
        <S.ModalContainer>
          <S.CloseButtonContainer onClick={onClose}>
            닫기
          </S.CloseButtonContainer>
          {children}
        </S.ModalContainer>
      </S.ModalWrapper>
    </ModalPortal>
  );
};

export default ModalComponent;
