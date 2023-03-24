import React from "react";
import useEscape from "../App/Hooks/use-escape";
export const ToastsContex = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const dismissHandler = (id) => {
    const updatedList = toasts.filter((item) => {
      return item.id !== id;
    });
    setToasts(updatedList);
  };

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);

  useEscape(handleEscape);

  return (
    <ToastsContex.Provider value={{ toasts, setToasts, dismissHandler }}>
      {children}
    </ToastsContex.Provider>
  );
}

export default ToastProvider;
