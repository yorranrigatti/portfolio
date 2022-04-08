import { SiTypescript, SiReact } from "react-icons/si";
import BoraMarcar from "../../assets/boramarcar.png";
import kenzieburguer from "../../assets/kenzieburguer.png";
import kenziehub from "../../assets/kenziehub.png";
import kenzieshop from "../../assets/kenzieshop.png";
import nukenzie from "../../assets/nukenzie.png";
import portfolio from "../../assets/portfolio.png";
import { Container, Section } from "./styles";

export const Projects = () => {
  return (
    <>
      <Container>
        <Section>
          <p>
            {" "}
            <span>const</span>
            {"Projects"} <span>{"= ( ) => ("}</span>
          </p>
          <p>{"<>"}</p>
          <div>
            <span>{"<section>"}</span>
            <h2>
              <span>{"<h2>"}</span>
              TypeScript <SiTypescript />
              <span>{"</h2>"}</span>
            </h2>
            <span>{"<ul>"}</span>
            <ul>
              <li>
                <a href="#" target="_blank">
                  <figure>
                    <img src={portfolio} alt="Portfólio" />
                  </figure>
                </a>
              </li>
            </ul>
            <span>{"</ul>"}</span>
            <h2>
              <span>{"<h2>"}</span>
              React <SiReact />
              <span>{"</h2>"}</span>
            </h2>
            <span>{"<ul>"}</span>
            <ul>
              <li>
                <a href="https://bora-marcar.vercel.app/login" target="_blank">
                  <figure>
                    <img src={BoraMarcar} alt="Bora marcar?" />
                  </figure>
                </a>
              </li>
              <li>
                <a href="https://kenzie-shop-2.vercel.app/" target="_blank">
                  <figure>
                    <img src={kenzieshop} alt="Kenzie Shop" />
                  </figure>
                </a>
              </li>
              <li>
                <a
                  href="https://kenzie-hub-five-topaz.vercel.app"
                  target="_blank"
                >
                  <figure>
                    <img src={kenziehub} alt="Kenzie Hub" />
                  </figure>
                </a>
              </li>
              <li>
                <a href="https://kenzie-burguer-phi.vercel.app" target="_blank">
                  <figure>
                    <img src={kenzieburguer} alt="Kenzie Burguer" />
                  </figure>
                </a>
              </li>
              <li>
                <a href="https://nu-kenzie-five.vercel.app" target="_blank">
                  <figure>
                    <img src={nukenzie} alt="Nu Kenzie" />
                  </figure>
                </a>
              </li>
            </ul>
            <span>{"</ul>"}</span>
            <br />
            <span>{"</section>"}</span>
          </div>
          <p>{"</>"}</p>
          <p>{");"}</p>
        </Section>
      </Container>
    </>
  );
};
