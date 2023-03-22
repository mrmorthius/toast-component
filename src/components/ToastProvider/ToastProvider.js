import React from "react";

export const ToastsContex = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const dismissHandler = (id) => {
    const updatedList = toasts.filter((item) => {
      return item.id != id;
    });
    setToasts(updatedList);
  };

  return (
    <ToastsContex.Provider value={{ toasts, setToasts, dismissHandler }}>
      {children}
    </ToastsContex.Provider>
  );
}

export default ToastProvider;
