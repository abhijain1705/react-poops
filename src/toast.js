import React, { useCallback, useEffect } from "react";
import "./toast.css";

const Toast = ({ toasts, settoasts, position }) => {
  const deleteToast = useCallback(
    (id) => {
      const newList = toasts.filter((tst) => tst.id !== id);
      settoasts(newList);
    },
    [toasts, settoasts]
  );

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (toasts.length) {
          deleteToast(toasts[0].id);
        }
      },
      toasts.length ? toasts[0]?.duration ?? 3000 : 3000
    );

    return () => {
      clearInterval(interval);
    };
  }, [toasts, deleteToast]);

  return (
    <div className={`container ${position ?? "top-right"}`}>
      {toasts.map((tst, i) => (
        <div
          className={`notification toast ${position ?? "top-right"}`}
          key={i}
        >
          <div className="content">
            {tst.imagePath && <img alt="snackbar" src={tst.imagePath} />}
            <div>
              <p className="title">{tst.title}</p>
              <p className="description">{tst.description}</p>
            </div>
          </div>
          <p className="time">{tst.time}</p>
        </div>
      ))}
    </div>
  );
};

export default Toast;
