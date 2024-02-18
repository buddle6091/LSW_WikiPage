/**Header */
import { useEffect, useState } from "react";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();

  return (
    <S.HeaderWrapper>
      <section onClick={() => nav("/")}>LSW_WIKI</section>
    </S.HeaderWrapper>
  );
};

export default Header;
