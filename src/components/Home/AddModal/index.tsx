import { useState } from "react";
import * as S from "./styled";
import useModal from "../../../hooks/useModal";
import { usePostWiki } from "../../../store/server/wiki";

const AddModal = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  /** 제목 입력값 감시 */
  const onTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    console.log(title);
  };

  /** 내용 입력값 감시 */
  const onContetnt = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
    console.log(content);
  };

  const { mutate } = usePostWiki();

  const { closeModalHandler } = useModal();

  const submitHandler = () => {
    const payload = {
      title: title,
      content: content,
    };
    mutate(payload);
    closeModalHandler();
  };

  return (
    <S.AddModalContainer>
      <S.Title>제목</S.Title>
      <S.Input placeholder="제목을 입력하세요" onChange={onTitle} />
      <S.Title>내용</S.Title>
      <S.TextArea placeholder="내용을 입력하세요" onChange={onContetnt} />
      <S.SubmitContainer>
        <button onClick={submitHandler}>등록</button>
      </S.SubmitContainer>
    </S.AddModalContainer>
  );
};

export default AddModal;
