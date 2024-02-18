import styled from "@emotion/styled";

export const ModalWrapper = styled.article`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
  display: flex;
  position: fixed;

  z-index: 11;
`;

export const ModalOverlay = styled.section`
  width: 100%;
  height: 100%;

  background-color: #00000050;
  position: fixed;
  z-index: 11;
`;

export const ModalContainer = styled.section`
  width: 35rem;
  height: auto;
  padding-top: 1.25rem;

  border-radius: 0.625rem;
  background-color: #ffffff;

  flex-direction: column;
  display: flex;
  position: fixed;

  z-index: 12;
`;

export const CloseButtonContainer = styled.div`
  width: 100%;
  padding: 0 1.25rem;

  justify-content: flex-end;

  display: flex;
  position: relative;

  img {
    width: 1.25rem;
    height: 1.25rem;
    cursor: pointer;
  }
`;

