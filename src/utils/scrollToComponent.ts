import { Dispatch, SetStateAction } from "react";

export const scrollToComponent = (
  id: string,
  setOpenMenu: Dispatch<SetStateAction<boolean>>
) => {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = -80;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + headerOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
  setOpenMenu(false);
};
