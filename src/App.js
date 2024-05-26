import React, { useState, useEffect } from "react";
import Toast from "./toast";
import { toastManager } from "./toastManager";

function ToastWrapper({ position }) {
  const [toasts, settoasts] = useState([]);

  useEffect(() => {
    toastManager.setAddToast((toast) => {
      settoasts((prev) => [...prev, { ...toast, id: prev.length }]);
    });
  }, []);

  return <Toast toasts={toasts} position={position} settoasts={settoasts} />;
}

export default ToastWrapper;
