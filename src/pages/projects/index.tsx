import {
  SiTypescript,
  SiReact,
  SiJavascript,
  SiCss3,
  SiHtml5,
} from "react-icons/si";

export const Projects = () => {
  return (
    <>
      <span>{"<html>"}</span>
      <span>{"<body>"}</span>
      <h2>
        <span>{"<h2>"}</span>
        React <SiReact /> + TypeScript <SiTypescript />
        <span>{"</h2>"}</span>
      </h2>
      <ul>
        <li>
          <a href="#">
            <figure>
              <img src="" alt="" />
            </figure>
          </a>
        </li>
      </ul>
      <h2>
        <span>{"<h2>"}</span>
        React <SiReact />
        <span>{"</h2>"}</span>
      </h2>
      <ul>
        <li>
          <a href="#">
            <figure>
              <img src="" alt="" />
            </figure>
          </a>
        </li>
      </ul>
      <h2>
        <span>{"<h2>"}</span>
        JavaScript <SiJavascript />
        <span>{"</h2>"}</span>
      </h2>
      <ul>
        <li>
          <a href="#">
            <figure>
              <img src="" alt="" />
            </figure>
          </a>
        </li>
      </ul>
      <h2>
        <span>{"<h2>"}</span>
        CSS <SiCss3 /> + HTML <SiHtml5 />
        <span>{"</h2>"}</span>
      </h2>
      <ul>
        <li>
          <a href="#">
            <figure>
              <img src="" alt="" />
            </figure>
          </a>
        </li>
      </ul>
      <span>{"</body>"}</span>
      <span>{"</html>"}</span>
    </>
  );
};
