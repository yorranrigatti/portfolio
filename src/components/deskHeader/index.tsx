import { Link } from "react-router-dom";
import { Container } from "./styles";

export const DeskHeader = () => {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Início</Link>
          </li>
          <li>
            <Link to={"/projects"}>Projetos</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contato</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};
