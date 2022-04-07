import { BurgerMenu } from "./components/header/burgerMenu";
import { Routes } from "./routes";
import GlobalStyle from "./styles/global";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <BurgerMenu />
      <Routes />
    </>
  );
};
