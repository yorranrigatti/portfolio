import { Link } from "react-router-dom";
import { Ul } from "./styles";
import {
  AiFillGithub,
  AiFillGoogleCircle,
  AiFillLinkedin,
} from "react-icons/ai";

export interface NavProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const RightNav = ({ open, setOpen }: NavProps) => {
  return (
    <Ul open={open} setOpen={setOpen}>
      <li>
        <Link to="/" onClick={() => setOpen(!open)}>
          Inicio
        </Link>
      </li>
      <li>
        <Link to="/projects" onClick={() => setOpen(!open)}>
          Projetos
        </Link>
      </li>
      <li>
        <Link to="/contact" onClick={() => setOpen(!open)}>
          Contato
        </Link>
      </li>
      <li>
        <a
          href={"https://github.com/yorranrigatti"}
          target="_blank"
          rel="noreferrer noopener"
        >
          <AiFillGithub />
        </a>
      </li>
      <li>
        <a
          href={"https://www.linkedin.com/in/yorranrigatti"}
          target="_blank"
          rel="noreferrer noopener"
        >
          <AiFillLinkedin />
        </a>
      </li>
      <li>
        <a
          href={
            "https://mail.google.com/mail/u/0/?fs=1&to=yorranjrrigatti@gmail.com&tf=cm"
          }
          target="_blank"
          rel="noreferrer noopener"
        >
          <AiFillGoogleCircle />
        </a>
      </li>
    </Ul>
  );
};
