import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toastPost, children }) {
  const { toasts, setToasts } = toastPost;
  console.log(toasts);

  return (
    <ol className={styles.wrapper}>
      {toasts &&
        toasts.map(({ id, variant, message }) => {
          return (
            <li className={styles.toastWrapper} key={id}>
              <Toast id={id} variant={variant} toastPost={toastPost}>
                {message}
              </Toast>
            </li>
          );
        })}
    </ol>
  );
}

export default ToastShelf;
