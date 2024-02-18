import React from "react";
import * as S from "./styled";

interface pagenationProps {
  total: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagenation = ({ total, page, setPage }: pagenationProps) => {
  const pageNumber = Math.ceil(total / 5);
  console.log(pageNumber, total);

  return (
    <S.PagenationContainer>
      {Array(pageNumber).map((_, i) => (
        <S.PagenateButton key={i + 1} onClick={() => setPage(i + 1)}>
          {i + 1}
        </S.PagenateButton>
      ))}
    </S.PagenationContainer>
  );
};

export default Pagenation;
