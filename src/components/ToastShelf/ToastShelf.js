import React from "react";
import { ToastsContex } from "../ToastProvider/ToastProvider";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ children }) {
  const { toasts } = React.useContext(ToastsContex);

  return (
    <ol className={styles.wrapper}>
      {toasts &&
        toasts.map(({ id, variant, message }) => {
          return (
            <li
              className={styles.toastWrapper}
              key={id}
              role="region"
              aria-live="polite"
              aria-label="Notification"
            >
              <Toast id={id} variant={variant}>
                {message}
              </Toast>
            </li>
          );
        })}
    </ol>
  );
}

export default ToastShelf;
