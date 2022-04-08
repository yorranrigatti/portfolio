import { Greeting, Main, ScrollDown } from "./styles";
import Typist from "react-typist";
import ScrollAnimation from "react-animate-on-scroll";

import { BsArrowRight } from "react-icons/bs";
import { Projects } from "../projects";

export const Home = () => {
  return (
    <>
      <Main>
        <Greeting>
          <Typist className="typist">
            <p>
              {" "}
              <span>const</span>
              {"greeting"} <span>{"= ( ) => ("}</span>
            </p>
            <p>{"<>"}</p>
            <h1>
              <span>{"<h1>"}</span>
              {"Oi,"}
              <h1>{"eu sou Yorran"}</h1>
              <h1>{"Web Developer"}</h1>
              <span>{"</h1>"}</span>
            </h1>
            <p>
              <span>{"<p>"}</span>
              {"Front End Developer / Back End Student"}
              <span>{"</p>"}</span>
            </p>
            <p>{"</>"}</p>
            <p>{");"}</p>
          </Typist>
        </Greeting>
        <ScrollAnimation animateIn="slideInUp" delay={8000} animateOnce>
          <button>Contrate-me</button>
        </ScrollAnimation>
        <ScrollDown>
          Scroll Down <BsArrowRight />
        </ScrollDown>
      </Main>
      <Projects />
    </>
  );
};
