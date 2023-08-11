import { Link } from "react-router-dom";
import { HeaderStyled, NavStyled } from "./styled";

function Header() {
  const pages = [
    {
      route: "/",
      description: "Usuários"
    },
    {
      route: "/storage",
      description: "Depósitos"
    }
  ]
  return (
    <HeaderStyled>
      <h3>Cabeçalho</h3>
      <NavStyled>
        {
          pages.map(({route, description}) => {
            return (
              <Link key={route} to={route}>{description}</Link>
            )
          })
        }
      </NavStyled>
    </HeaderStyled>
  );
}

export { Header };
