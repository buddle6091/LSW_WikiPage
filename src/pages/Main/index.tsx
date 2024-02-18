import { useState, useEffect } from "react";
import * as S from "./styled";
import { useGetWikiInfo } from "../../store/server/wiki";
import { WikiProps } from "../../interfaces/wiki";
import useModal from "../../hooks/useModal";
import AddModal from "../../components/Home/AddModal";
import Pagenation from "../../components/Home/Pagenation";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const data = useGetWikiInfo();
  console.log(data);

  const [page, setPage] = useState(1);

  const WikiListComponent = () => {
    const offset = (page - 1) * 5;
    const nav = useNavigate();

    return data?.slice(offset, offset + 5).map((list: WikiProps) => (
      <tr key={list?.id}>
        <td className="wikiNumber">{list?.id}</td>
        <td className="wikiName" onClick={() => nav(`/wiki/${list?.id}`)}>
          {list?.title}
        </td>
      </tr>
    ));
  };

  const { Modal, openModalHandler } = useModal();

  return (
    <>
      <Modal>
        <AddModal />
      </Modal>
      <S.MainWrapper>
        <S.AddContainer>
          <span>위키 리스트</span>{" "}
          <button onClick={openModalHandler}>위키 추가</button>
        </S.AddContainer>
        <S.ListContainer>
          <S.ListTable>
            <thead>
              <tr>
                <th className="wikiNumber">번호</th>
                <th className="wikiName">제목</th>
              </tr>
            </thead>
            {WikiListComponent()}
          </S.ListTable>
        </S.ListContainer>
        <Pagenation total={data?.length} page={page} setPage={setPage} />
      </S.MainWrapper>
    </>
  );
};

export default Main;
