import React from "react";

function useStorageListener(syncronizeTodos) {
  const [storageChange, setStorageChange] = React.useState(false);

  window.addEventListener("storage", (change) => {
    if (change.key === "TODOS_V1") {
      setStorageChange(true);
    }
  });

  const toggleShow = () => {
    syncronizeTodos();
    setStorageChange(false);
  };

  return {
    show: storageChange, 
    toggleShow
  }
};

export { useStorageListener };
