import { useState } from "react";
import { RightNav } from "../rightNav";
import { StyledBurger } from "./styles";

export const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} setOpen={setOpen} />
    </>
  );
};
