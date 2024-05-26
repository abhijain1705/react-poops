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
  trigger: ({
    description,
    imagePath,
    imageClass,
    titleClass,
    descriptionClass,
    containerClass,
    title,
    time,
  }) => {
    toastManager.addToast({
      title,
      time,
      description,
      imageClass,
      titleClass,
      descriptionClass,
      containerClass,
      imagePath,
    });
  },
};
