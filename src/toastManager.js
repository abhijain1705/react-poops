let addToast;

export const toastManager = {
  addToast: (toast) => {
    if (addToast) {
      addToast(toast);
    } else {
      console.error("Toast container is not initialized yet.");
    }
  },
  setAddToast: (fn) => {
    addToast = fn;
  },
};

export const toast = {
  trigger: ({ description, imagePath, title, time }) => {
    toastManager.addToast({
      title,
      time,
      description,
      imagePath,
    });
  },
};
