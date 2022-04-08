import { DeskHeader } from "./components/deskHeader";
import { BurgerMenu } from "./components/mobileHeader/burgerMenu";
import { Routes } from "./routes";
import GlobalStyle from "./styles/global";

export const App = () => {
  return (
    <>
      <BurgerMenu />
      <DeskHeader />
      <GlobalStyle />
      <Routes />
    </>
  );
};
