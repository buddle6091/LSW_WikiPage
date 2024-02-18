import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./styled";
import {
  useGetWikiDetail,
  useGetWikiInfo,
  usePatchWiki,
} from "../../store/server/wiki";
import { WikiProps } from "../../interfaces/wiki";

/**본문에서 title 찾기 */
const getTitleByContent = (content: string) => {
  const { data: totalWikiData } = useGetWikiInfo();
  const contentMatches = totalWikiData.filter((wiki: WikiProps) =>
    wiki.content.includes(content)
  );
  return contentMatches.map((match: WikiProps) => match.content);

  //Todo. 전체 wiki를 들고 있는 api 객체와 현재 페이지의 객체의 content값과 비교해서 title이 겹치면 dom을 통해서 문자열을 잘라 <a> 태그화..?
};

const Wiki = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { id } = useParams();
  const wikiId = Number(id);

  const data = useGetWikiDetail(wikiId);
  const { mutate } = usePatchWiki(wikiId);
  console.log(data);

  const editHandler = () => {
    if (isEdit === false) {
      setIsEdit(true);
    }
  };

  /**수정 TextArea */
  const ContentContainerByEdit = (content: { content: string }) => {
    const [getContent, setContent] = useState(content.content);

    const onContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setContent(event.target.value);
    };

    const editHandler = () => {
      if (isEdit === true) {
        mutate(getContent);
        setIsEdit(false);
      }
    };

    console.log(getContent, typeof getContent);
    return (
      <>
        <S.TextArea value={getContent} onChange={onContent} />
        <S.EditContainer>
          <button onClick={editHandler}>수정 완료</button>
        </S.EditContainer>
      </>
    );
  };

  return (
    <S.WikiWrapper>
      <S.TitleContainer>{data?.title}</S.TitleContainer>

      {isEdit === true ? (
        <ContentContainerByEdit content={data?.content} />
      ) : (
        <>
          <S.ContentContainer>{data?.content}</S.ContentContainer>
          <S.EditContainer>
            <button onClick={editHandler}>수정</button>
          </S.EditContainer>
        </>
      )}
    </S.WikiWrapper>
  );
};

export default Wiki;
