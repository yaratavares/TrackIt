import { useContext } from "react";
import HeaderContainer from "./style";
import { UserLogin } from "../../contexts/UserLogin";

export default function HeaderPage() {
  const { user } = useContext(UserLogin);

  return (
    <HeaderContainer>
      <h1>TrackIt</h1>
      <img src={user.image} alt={`Imagem ${user.name}`} />
    </HeaderContainer>
  );
}
