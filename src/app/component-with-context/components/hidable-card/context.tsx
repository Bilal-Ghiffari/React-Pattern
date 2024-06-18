import * as React from "react";

type HidableCardContextType = {
  hidden: boolean;
  toggle: () => void;
};

const HiddableCardContext = React.createContext<HidableCardContextType | null>(
  null
);

export const HidableCardContextProvider: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [hidden, setHidden] = React.useState(false);
  const toggle = () => setHidden((prev) => !prev);
  return (
    <HiddableCardContext.Provider value={{ hidden, toggle }}>
      {children}
    </HiddableCardContext.Provider>
  );
};

// Custom Hooks # checkers if context not found
export const useHidableCardContext = () => {
  const context = React.useContext(HiddableCardContext);

  if (!context) {
    throw new Error(
      "useHidableCardContext must be used inside the HidableCardContextProvider"
    );
  }

  return context;
};
