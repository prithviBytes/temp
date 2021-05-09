import { useState, createContext } from "react";

export const NavbarContext = createContext();

export function NavbarContextProvider({ children }) {
  const [isNavbarExpanded, setNavbarExpanded] = useState(true);
  const toggleNavbar = () => {
    setNavbarExpanded((state) => !state);
  };
  const value = {
    isNavbarExpanded,
    toggleNavbar
  };
  return (
    <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
  );
}
