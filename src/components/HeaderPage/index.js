import { useContext } from "react";
import HeaderContainer from "./style";
import { UserLogin } from "../../contexts/UserLogin";

export default function HeaderPage() {
  const { user } = useContext(UserLogin);
  console.log(user);

  return (
    <HeaderContainer>
      <h1>TrackIt</h1>
      <img src={user.image} alt={`Imagem perfil ${user.name}`} />
    </HeaderContainer>
  );
}
