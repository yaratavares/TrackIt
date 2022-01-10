import { useContext } from "react";
import { UserLogin } from "../../common/contexts/UserLogin";
import HeaderContainer from "./style";

export default function HeaderPage() {
  const { user } = useContext(UserLogin);

  return (
    <HeaderContainer>
      <h1>TrackIt</h1>
      <img src={user.image} alt={`Imagem ${user.name}`} />
    </HeaderContainer>
  );
}
