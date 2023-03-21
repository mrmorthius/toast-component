import React from "react";
import Button from "../Button";
import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";
import { v4 as uuidv4 } from "uuid";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variantType, setVariantType] = React.useState("");
  const [showToast, setToast] = React.useState(false);

  const toggle = { setToast };
  const [toasts, setToasts] = React.useState([]);
  const toastPost = { toasts, setToasts };
  const id = React.useId();

  // React.useEffect(() => {
  //   console.log(toasts);
  // }, [toasts]);

  return (
    <form
      className={styles.wrapper}
      onSubmit={(event) => {
        event.preventDefault();
        setToast(true);
        setToasts([
          ...toasts,
          {
            id: uuidv4(),
            message: message,
            variant: variantType,
          },
        ]);
        setMessage("");
        setVariantType("notice");
      }}
    >
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {showToast && <ToastShelf toastPost={toastPost}>{message}</ToastShelf>}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              value={message}
              id="message"
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              className={styles.messageInput}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => {
              return (
                <React.Fragment key={option}>
                  <label htmlFor={`variant-${option}`}>
                    <input
                      id={`variant-${option}`}
                      type="radio"
                      name="variant"
                      value={`${option}`}
                      checked={variantType === option}
                      onChange={(event) => {
                        setVariantType(event.target.value);
                      }}
                    />
                    {option}
                  </label>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button id={id} type="submit">
              Pop Toast!
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToastPlayground;
