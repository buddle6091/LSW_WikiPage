import * as S from "./styled";
import Header from "../Header";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<React.PropsWithChildren<Props>> = ({
  children,
}) => {
  return (
    <>
      <Header />
      <S.ChildrenWrapper>{children}</S.ChildrenWrapper>
    </>
  );
};

export default Layout;
