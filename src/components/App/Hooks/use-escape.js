import React from "react";

function useEscape(callback) {
  React.useEffect(() => {
    function closeModal(event) {
      if (event.code === "Escape") {
        callback(event);
      }
    }
    window.addEventListener("keydown", closeModal);

    return () => {
      window.removeEventListener("keydown", closeModal);
    };
  }, [callback]);
}

export default useEscape;
